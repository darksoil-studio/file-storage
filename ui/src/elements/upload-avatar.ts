import { EntryHash } from "@holochain/client";
import { consume } from "@lit/context";
import { msg } from "@lit/localize";
import { mdiPlus } from "@mdi/js";
import "@shoelace-style/shoelace/dist/components/avatar/avatar.js";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/tooltip/tooltip.js";
import {
  FormField,
  FormFieldController,
  sharedStyles,
  wrapPathInSvg,
} from "@tnesh-stack/elements";
import { LitElement, css, html } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { fileStorageClientContext } from "../context";
import { FileStorageClient } from "../file-storage-client";
import "./show-avatar-image.js";

@customElement("upload-avatar")
export class UploadAvatar extends LitElement implements FormField {
  @property({ attribute: "name" })
  name = "avatar";

  @property()
  required = false;

  @property()
  shape: "circle" | "square" | "rounded" = "circle";

  @property()
  value: EntryHash | undefined;

  @property()
  disabled = false;

  @property()
  defaultValue: EntryHash | undefined;

  @property()
  label: string = msg("Avatar");

  @consume({ context: fileStorageClientContext })
  private _client!: FileStorageClient;

  @query("#avatar-file-picker")
  private _avatarFilePicker!: HTMLInputElement;

  @query("#error-input")
  private _errorInput!: HTMLInputElement;

  _controller = new FormFieldController(this);

  reportValidity() {
    const invalid = this.required !== false && !this.value;
    if (invalid) {
      this._errorInput.setCustomValidity("Avatar is required");
      this._errorInput.reportValidity();
    }

    return !invalid;
  }

  reset() {
    this.value = this.defaultValue;
  }

  async onAvatarUploaded() {
    if (this._avatarFilePicker.files && this._avatarFilePicker.files[0]) {
      this.value = await this._client.uploadFile(
        this._avatarFilePicker.files[0]
      );
      this.dispatchEvent(
        new CustomEvent("avatar-uploaded", {
          bubbles: true,
          composed: true,
          detail: {
            imageHash: this.value,
          },
        })
      );
      this._avatarFilePicker.value = "";
    }
  }

  renderAvatar() {
    if (this.value)
      return html`
        <div
          class="column"
          style="align-items: center; height: 50px"
          @click=${() => {
            this.value = undefined;
          }}
        >
          <sl-tooltip .content=${msg("Clear")}>
            <show-avatar-image
              style="--size: 46px"
              .imageHash=${this.value}
              .shape=${this.shape}
            >
            </show-avatar-image>
          </sl-tooltip>
        </div>
      `;
    else
      return html` <div class="column" style="align-items: center;">
        <sl-button
          .disabled=${this.disabled}
          variant="default"
          size="large"
          circle
          @click=${() => this._avatarFilePicker.click()}
        >
          <sl-icon
            src="${wrapPathInSvg(mdiPlus)}"
            .label=${msg("Add avatar image")}
          ></sl-icon>
        </sl-button>
      </div>`;
  }

  render() {
    return html`<input
        type="file"
        id="avatar-file-picker"
        style="display: none"
        @change=${this.onAvatarUploaded}
      />
      <div class="column" style="position: relative; align-items: center">
        <input
          id="error-input"
          style="position: absolute; z-index: -1; left: 50%; top: 30px; height: 0; width: 0"
        />
        ${this.label !== ""
          ? html`
              <span
                style="font-size: var(--sl-input-label-font-size-medium); margin-bottom: 4px"
                >${this.label}${this.required !== false ? " *" : ""}</span
              >
            `
          : html``}
        ${this.renderAvatar()}
      </div>`;
  }

  static styles = sharedStyles;
}
