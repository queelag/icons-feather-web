import { ICON_FEATHER_CROSSHAIR } from '@aracna/icons-feather/assets/crosshair'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-crosshair': IconFeatherElement
  }
}

export class IconFeatherCrosshairElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CROSSHAIR
  }
}

defineCustomElement('icon-feather-crosshair', IconFeatherCrosshairElement)
