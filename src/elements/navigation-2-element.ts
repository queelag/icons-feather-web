import { ICON_F_NAVIGATION_2 } from '@aracna/icons-feather/assets/navigation-2'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-navigation-2': IconFeatherNavigation2Element
  }
}

export class IconFeatherNavigation2Element extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_NAVIGATION_2
  }
}

defineCustomElement('icon-feather-navigation-2', IconFeatherNavigation2Element)
