import { ICON_FEATHER_THERMOMETER } from '@aracna/icons-feather/assets/thermometer'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-thermometer': IconFeatherThermometerElement
  }
}

export class IconFeatherThermometerElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_THERMOMETER
  }
}

defineCustomElement('icon-feather-thermometer', IconFeatherThermometerElement)
