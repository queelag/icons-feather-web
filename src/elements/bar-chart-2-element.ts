import { ICON_F_BAR_CHART_2 } from '@aracna/icons-feather/assets/bar-chart-2'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-bar-chart-2': IconFeatherBarChart2Element
  }
}

export class IconFeatherBarChart2Element extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_BAR_CHART_2
  }
}

defineCustomElement('icon-feather-bar-chart-2', IconFeatherBarChart2Element)
