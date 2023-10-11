import { ICON_FEATHER_AIRPLAY } from '@aracna/icons-feather/assets/airplay'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-airplay': IconFeatherElement
  }
}

export class IconFeatherAirplayElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_AIRPLAY
  }
}

defineCustomElement('icon-feather-airplay', IconFeatherAirplayElement)
