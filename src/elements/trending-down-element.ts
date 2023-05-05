import { defineCustomElement } from '@aracna/web'
import { IconElement } from '@aracna/web-components/elements/data/icon-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-trending-down': IconElement
  }
}

export class IconFeatherTrendingDownElement extends IconElement {
  constructor() {
    super()

    this.fill = 'none'
    this.size = 16
    this.src =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-down"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>'
    this.stroke = 'currentColor'
    this.strokeLineCap = 'round'
    this.strokeLineJoin = 'round'
    this.strokeWidth = '2'
  }
}

defineCustomElement('icon-feather-trending-down', IconFeatherTrendingDownElement)
