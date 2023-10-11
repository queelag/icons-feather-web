import { ICON_FEATHER_MENU } from '@aracna/icons-feather/assets/menu'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-menu': IconFeatherMenuElement
  }
}

export class IconFeatherMenuElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_MENU
  }
}

defineCustomElement('icon-feather-menu', IconFeatherMenuElement)
