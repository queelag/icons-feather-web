import { ICON_FEATHER_FILE } from '@aracna/icons-feather/assets/file'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-file': IconFeatherElement
  }
}

export class IconFeatherFileElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_FILE
  }
}

defineCustomElement('icon-feather-file', IconFeatherFileElement)
