import { css, html, LitElement } from "lit";
import { property, customElement } from "lit/decorators.js";
import { hashProperty, sharedStyles } from "@darksoil-studio/holochain-elements";
import { consume } from "@lit/context";

import "@shoelace-style/shoelace/dist/components/skeleton/skeleton.js";
import "@shoelace-style/shoelace/dist/components/avatar/avatar.js";
import "@darksoil-studio/holochain-elements/dist/elements/display-error.js";

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
  @property(hashProperty("image-hash")) imageHash: EntryHash | undefined;

  @property()
  shape: "circle" | "square" | "rounded" = "circle";

  /**
   * @internal
   */
  @consume({ context: fileStorageClientContext })
  client!: FileStorageClient;

  @property()
  initials = "";

  /**
   * @internal
   */
  _renderImage = new Task(
    this,
    async ([fileHash]) => {
      const image = await getImage(fileHash!);
      if (image) {
        return image;
      }

      const file = await this.client.downloadFile(fileHash!);
      const data = await file.arrayBuffer();

      const imageB64 = `data:${file.type};base64,${fromUint8Array(
        new Uint8Array(data),
      )}`;

      storeImage(fileHash!, imageB64);

      return imageB64;
    },
    () => [this.imageHash],
  );

  renderImage(data: string) {
    return html`
      <sl-avatar
        .image=${data}
        part="image"
        .initials=${this.initials.slice(0, 2)}
        .shape=${this.shape}
      ></sl-avatar>
    `;
  }

  render() {
    if (!this.imageHash) {
      return html`
        <sl-avatar
          part="image"
          .initials=${this.initials.slice(0, 2)}
          .shape=${this.shape}
        ></sl-avatar>
      `;
    }

    return this._renderImage.render({
      complete: (d) => this.renderImage(d),
      pending: () =>
        html`<sl-skeleton
          style="width: var(--size); height: var(--size); --border-radius: 50%; "
          effect="pulse"
        ></sl-skeleton> `,
      error: (e: unknown) =>
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
          --size2: var(--size);
        }
        sl-avatar {
          --size: var(--size2);
        }
      `,
    ];
  }
}
