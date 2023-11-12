import { ICON_F_SUNRISE } from '@aracna/icons-feather/assets/sunrise'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-sunrise': IconFeatherSunriseElement
  }
}

export class IconFeatherSunriseElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_SUNRISE
  }
}

defineCustomElement('icon-feather-sunrise', IconFeatherSunriseElement)
