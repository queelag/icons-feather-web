import { AracnaIconElement } from '@aracna/web-components/elements/data/icon-element'
import { type CSSResultGroup, css } from 'lit'

export class IconFeatherElement extends AracnaIconElement {
  constructor() {
    super()

    this.fill = 'inherit'
    this.size = 16
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
