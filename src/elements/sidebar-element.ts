import { ICON_FEATHER_SIDEBAR } from '@aracna/icons-feather/assets/sidebar'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-sidebar': IconFeatherElement
  }
}

export class IconFeatherSidebarElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SIDEBAR
  }
}

defineCustomElement('icon-feather-sidebar', IconFeatherSidebarElement)
