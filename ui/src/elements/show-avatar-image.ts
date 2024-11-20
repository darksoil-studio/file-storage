import { css, html, LitElement } from "lit";
import { property, customElement } from "lit/decorators.js";
import { hashProperty, sharedStyles } from "@tnesh-stack/elements";
import { consume } from "@lit/context";

import "@shoelace-style/shoelace/dist/components/skeleton/skeleton.js";
import "@tnesh-stack/elements/dist/elements/display-error.js";

import { EntryHash } from "@holochain/client";
import { Task } from "@lit-labs/task";
import { fromUint8Array } from "js-base64";
import { localized, msg } from "@lit/localize";

import { FileStorageClient } from "../file-storage-client";
import { fileStorageClientContext } from "../context";
import { getImage, storeImage } from "../local-storage";

@localized()
@customElement("show-avatar-image")
export class ShowAvatarImage extends LitElement {
  /** Public attributes */

  /**
   * REQUIRED. The hash of the image to be rendered
   */
  @property(hashProperty("image-hash")) imageHash!: EntryHash;

  /**
   * @internal
   */
  @consume({ context: fileStorageClientContext })
  client!: FileStorageClient;

  @property()
  initials: string = "";

  /**
   * @internal
   */
  _renderImage = new Task(
    this,
    async ([fileHash]) => {
      const image = await getImage(fileHash);
      if (image) {
        return image;
      }

      const file = await this.client.downloadFile(fileHash);
      const data = await file.arrayBuffer();

      const imageB64 = `data:${file.type};base64,${fromUint8Array(
        new Uint8Array(data)
      )}`;

      storeImage(fileHash, imageB64);

      return imageB64;
    },
    () => [this.imageHash]
  );

  renderImage(data: string) {
    return html`
      <sl-avatar
        .src=${data}
        style="--size: var(--size)"
        part="image"
        .initials=${this.initials.slice(0, 2)}
      ></sl-avatar>
    `;
  }

  render() {
    return this._renderImage.render({
      complete: (d) => this.renderImage(d),
      pending: () =>
        html`<sl-skeleton
          style="width: var(--size); height: var(--size); --border-radius: 50%; "
          effect="pulse"
        ></sl-skeleton> `,
      error: (e: any) =>
        html`<display-error
          .headline=${msg("Error fetching the avatar")}
          tooltip
          .error=${e}
        ></display-error>`,
    });
  }

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: contents;
          --size: 32px;
        }
      `,
    ];
  }
}
