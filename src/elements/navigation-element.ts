import { ICON_F_NAVIGATION } from '@aracna/icons-feather/assets/navigation'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-navigation': IconFeatherNavigationElement
  }
}

export class IconFeatherNavigationElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_NAVIGATION
  }
}

defineCustomElement('icon-feather-navigation', IconFeatherNavigationElement)
