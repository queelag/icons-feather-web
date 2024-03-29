import { ICON_F_PLUS } from '@aracna/icons-feather/assets/plus'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-plus': IconFeatherPlusElement
  }
}

export class IconFeatherPlusElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_PLUS
  }
}

defineCustomElement('icon-feather-plus', IconFeatherPlusElement)
