import { ICON_FEATHER_UPLOAD_CLOUD } from '@aracna/icons-feather/assets/upload-cloud'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-upload-cloud': IconFeatherUploadCloudElement
  }
}

export class IconFeatherUploadCloudElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_UPLOAD_CLOUD
  }
}

defineCustomElement('icon-feather-upload-cloud', IconFeatherUploadCloudElement)
