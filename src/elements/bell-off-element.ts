import { defineCustomElement } from '@aracna/web'
import { IconElement } from '@aracna/web-components/elements/data/icon-element.js'
import { css, CSSResultGroup } from 'lit'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-bell-off': IconElement
  }
}

export class IconFeatherBellOffElement extends IconElement {
  constructor() {
    super()

    this.fill = 'inherit'
    this.size = 16
    this.src =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell-off"><path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>'
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

defineCustomElement('icon-feather-bell-off', IconFeatherBellOffElement)
