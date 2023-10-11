import { ICON_FEATHER_DOWNLOAD } from '@aracna/icons-feather/assets/download'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-download': IconFeatherDownloadElement
  }
}

export class IconFeatherDownloadElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_DOWNLOAD
  }
}

defineCustomElement('icon-feather-download', IconFeatherDownloadElement)
