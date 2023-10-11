import { ICON_FEATHER_UPLOAD } from '@aracna/icons-feather/assets/upload'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-upload': IconFeatherElement
  }
}

export class IconFeatherUploadElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_UPLOAD
  }
}

defineCustomElement('icon-feather-upload', IconFeatherUploadElement)
