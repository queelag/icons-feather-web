import { ICON_F_PIE_CHART } from '@aracna/icons-feather/assets/pie-chart'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-pie-chart': IconFeatherPieChartElement
  }
}

export class IconFeatherPieChartElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_PIE_CHART
  }
}

defineCustomElement('icon-feather-pie-chart', IconFeatherPieChartElement)
