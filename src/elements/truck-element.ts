import { ICON_FEATHER_TRUCK } from '@aracna/icons-feather/assets/truck'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-truck': IconFeatherTruckElement
  }
}

export class IconFeatherTruckElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_TRUCK
  }
}

defineCustomElement('icon-feather-truck', IconFeatherTruckElement)
