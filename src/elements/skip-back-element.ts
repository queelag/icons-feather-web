import { defineCustomElement } from '@aracna/web'
import { IconElement } from '@aracna/web-components/elements/data/icon-element.js'
import { css, CSSResultGroup } from 'lit'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-skip-back': IconElement
  }
}

export class IconFeatherSkipBackElement extends IconElement {
  constructor() {
    super()

    this.fill = 'inherit'
    this.size = 16
    this.src =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-skip-back"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>'
    this.stroke = 'inherit'
    this.strokeLineCap = 'round'
    this.strokeLineJoin = 'round'
    this.strokeWidth = '2'
  }

  static styles: CSSResultGroup = [
    super.styles,
    css`
      :host {
        fill: none;
        stroke: black;
      }
    `
  ]
}

defineCustomElement('icon-feather-skip-back', IconFeatherSkipBackElement)
