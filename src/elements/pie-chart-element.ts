import { ICON_FEATHER_PIE_CHART } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-pie-chart': IconFeatherElement
  }
}

export class IconFeatherPieChartElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PIE_CHART
  }
}

defineCustomElement('icon-feather-pie-chart', IconFeatherPieChartElement)
