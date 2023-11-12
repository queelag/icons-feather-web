import { ICON_F_UPLOAD } from '@aracna/icons-feather/assets/upload'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-upload': IconFeatherUploadElement
  }
}

export class IconFeatherUploadElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_UPLOAD
  }
}

defineCustomElement('icon-feather-upload', IconFeatherUploadElement)
