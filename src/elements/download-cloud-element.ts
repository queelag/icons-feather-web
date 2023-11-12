import { ICON_F_DOWNLOAD_CLOUD } from '@aracna/icons-feather/assets/download-cloud'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-download-cloud': IconFeatherDownloadCloudElement
  }
}

export class IconFeatherDownloadCloudElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_DOWNLOAD_CLOUD
  }
}

defineCustomElement('icon-feather-download-cloud', IconFeatherDownloadCloudElement)
