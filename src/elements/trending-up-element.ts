import { ICON_FEATHER_TRENDING_UP } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-trending-up': IconFeatherElement
  }
}

export class IconFeatherTrendingUpElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_TRENDING_UP
  }
}

defineCustomElement('icon-feather-trending-up', IconFeatherTrendingUpElement)
