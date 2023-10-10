import { ICON_FEATHER_MORE_VERTICAL } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconElement } from '@aracna/web-components/elements/data/icon-element.js'
import { css, CSSResultGroup } from 'lit'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-more-vertical': IconElement
  }
}

export class IconFeatherMoreVerticalElement extends IconElement {
  constructor() {
    super()

    this.fill = 'inherit'
    this.size = 16
    this.src = ICON_FEATHER_MORE_VERTICAL
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

defineCustomElement('icon-feather-more-vertical', IconFeatherMoreVerticalElement)
