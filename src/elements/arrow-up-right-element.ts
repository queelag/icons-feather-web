import { defineCustomElement } from '@aracna/web'
import { IconElement } from '@aracna/web-components/elements/data/icon-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-up-right': IconElement
  }
}

export class IconFeatherArrowUpRightElement extends IconElement {
  constructor() {
    super()

    this.fill = 'none'
    this.size = 16
    this.src =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>'
    this.stroke = 'currentColor'
    this.strokeLineCap = 'round'
    this.strokeLineJoin = 'round'
    this.strokeWidth = '2'
  }
}

defineCustomElement('icon-feather-arrow-up-right', IconFeatherArrowUpRightElement)
