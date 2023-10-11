import { ICON_FEATHER_BAR_CHART } from '@aracna/icons-feather/assets/bar-chart'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-bar-chart': IconFeatherBarChartElement
  }
}

export class IconFeatherBarChartElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_BAR_CHART
  }
}

defineCustomElement('icon-feather-bar-chart', IconFeatherBarChartElement)
