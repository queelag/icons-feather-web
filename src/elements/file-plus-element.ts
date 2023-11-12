import { ICON_F_FILE_PLUS } from '@aracna/icons-feather/assets/file-plus'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-file-plus': IconFeatherFilePlusElement
  }
}

export class IconFeatherFilePlusElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_FILE_PLUS
  }
}

defineCustomElement('icon-feather-file-plus', IconFeatherFilePlusElement)
