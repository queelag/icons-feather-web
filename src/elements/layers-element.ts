import { ICON_FEATHER_LAYERS } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-layers': IconFeatherElement
  }
}

export class IconFeatherLayersElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_LAYERS
  }
}

defineCustomElement('icon-feather-layers', IconFeatherLayersElement)
