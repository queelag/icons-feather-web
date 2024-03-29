import { ICON_F_TRENDING_DOWN } from '@aracna/icons-feather/assets/trending-down'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-trending-down': IconFeatherTrendingDownElement
  }
}

export class IconFeatherTrendingDownElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_TRENDING_DOWN
  }
}

defineCustomElement('icon-feather-trending-down', IconFeatherTrendingDownElement)
