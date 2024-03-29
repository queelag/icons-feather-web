import { ICON_F_TRENDING_UP } from '@aracna/icons-feather/assets/trending-up'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-trending-up': IconFeatherTrendingUpElement
  }
}

export class IconFeatherTrendingUpElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_TRENDING_UP
  }
}

defineCustomElement('icon-feather-trending-up', IconFeatherTrendingUpElement)
