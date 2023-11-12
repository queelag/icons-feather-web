import { ICON_F_LAYERS } from '@aracna/icons-feather/assets/layers'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-layers': IconFeatherLayersElement
  }
}

export class IconFeatherLayersElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_LAYERS
  }
}

defineCustomElement('icon-feather-layers', IconFeatherLayersElement)
