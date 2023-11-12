import { ICON_F_SIDEBAR } from '@aracna/icons-feather/assets/sidebar'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-sidebar': IconFeatherSidebarElement
  }
}

export class IconFeatherSidebarElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_SIDEBAR
  }
}

defineCustomElement('icon-feather-sidebar', IconFeatherSidebarElement)
