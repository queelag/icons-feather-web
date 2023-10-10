import { ICON_FEATHER_TRENDING_DOWN } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-trending-down': IconFeatherElement
  }
}

export class IconFeatherTrendingDownElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_TRENDING_DOWN
  }
}

defineCustomElement('icon-feather-trending-down', IconFeatherTrendingDownElement)
