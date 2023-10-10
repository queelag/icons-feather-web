import { ICON_FEATHER_NAVIGATION } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-navigation': IconFeatherElement
  }
}

export class IconFeatherNavigationElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_NAVIGATION
  }
}

defineCustomElement('icon-feather-navigation', IconFeatherNavigationElement)
