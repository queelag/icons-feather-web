import { ICON_FEATHER_FILE_PLUS } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-file-plus': IconFeatherElement
  }
}

export class IconFeatherFilePlusElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_FILE_PLUS
  }
}

defineCustomElement('icon-feather-file-plus', IconFeatherFilePlusElement)
