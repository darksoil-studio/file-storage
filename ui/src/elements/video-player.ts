import { css, html, LitElement } from "lit";
import { property, customElement } from "lit/decorators.js";
import {
  hashProperty,
  sharedStyles,
} from "@darksoil-studio/holochain-elements";
import { consume } from "@lit/context";

import "@shoelace-style/shoelace/dist/components/skeleton/skeleton.js";
import "@darksoil-studio/holochain-elements/dist/elements/display-error.js";

import { EntryHash } from "@holochain/client";
import { Task } from "@lit-labs/task";
import { localized, msg } from "@lit/localize";

import { FileStorageClient } from "../file-storage-client";
import { fileStorageClientContext } from "../context";
import { getFile, storeFile } from "../local-storage";

@localized()
@customElement("video-player")
export class VideoPlayer extends LitElement {
  /** Public attributes */

  /**
   * REQUIRED. The hash of the video to be rendered
   */
  @property(hashProperty("video-hash")) videoHash!: EntryHash;

  /**
   * @internal
   */
  @consume({ context: fileStorageClientContext })
  client!: FileStorageClient;

  /**
   * @internal
   */
  _renderVideo = new Task(
    this,
    async ([fileHash]) => {
      const video = await getFile(fileHash);
      if (video) {
        return URL.createObjectURL(video);
      }

      const file = await this.client.downloadFile(fileHash);

      storeFile(fileHash, file);

      return URL.createObjectURL(file);
    },
    () => [this.videoHash],
  );

  renderImage(data: string) {
    return html`<div style="flex:1">
      <video
        src="${data}"
        controls
        part="video"
        style="object-fit: cover; overflow: hidden; width: 100%; height: 100%"
      ></video>
    </div>`;
  }

  render() {
    return this._renderVideo.render({
      complete: (d) => this.renderImage(d),
      pending: () =>
        html`<sl-skeleton
          style="flex: 1; --border-radius: 0"
          effect="pulse"
        ></sl-skeleton> `,
      error: (e: unknown) =>
        html`<display-error
          .headline=${msg("Error fetching the image")}
          .error=${e}
        ></display-error>`,
    });
  }

  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: flex;
        }
      `,
    ];
  }
}
