import { ICON_FEATHER_ALERT_OCTAGON } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconElement } from '@aracna/web-components/elements/data/icon-element.js'
import { css, CSSResultGroup } from 'lit'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-alert-octagon': IconElement
  }
}

export class IconFeatherAlertOctagonElement extends IconElement {
  constructor() {
    super()

    this.fill = 'inherit'
    this.size = 16
    this.src = ICON_FEATHER_ALERT_OCTAGON
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

defineCustomElement('icon-feather-alert-octagon', IconFeatherAlertOctagonElement)
