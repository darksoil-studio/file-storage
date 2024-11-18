import { css, html, LitElement } from "lit";
import { consume, provide } from "@lit/context";
import { property, customElement } from "lit/decorators.js";
import { AppClient } from "@holochain/client";
import { appClientContext } from "@tnesh-stack/elements";

import { fileStorageClientContext } from "../context.js";
import { FileStorageClient } from "../file-storage-client.js";

@customElement("file-storage-context")
export class FileStorageContext extends LitElement {
  @provide({ context: fileStorageClientContext })
  @property({ type: Object })
  client!: FileStorageClient;

  @consume({ context: appClientContext, subscribe: true })
  appClient!: AppClient;

  @property()
  role!: string;

  @property()
  zome = "file_storage";

  connectedCallback() {
    super.connectedCallback();
    if (this.client) return;
    if (!this.role) {
      throw new Error(
        `<file-storage-context> must have a role="YOUR_DNA_ROLE" property, eg: <file-storage-context role="role1">`
      );
    }
    if (!this.appClient) {
      throw new Error(
        `<file-storage-context> must either:
				a) be placed inside <app-client-context>
					or 
				b) receive an AppClient property (eg. <file-storage-context .client=\${client}>) 
					or 
				c) receive a store property (eg. <file-storage-context .store=\${store}>)`
      );
    }
    this.client = new FileStorageClient(this.appClient, this.role, this.zome);
  }

  render() {
    return html`<slot></slot>`;
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}
