import { ICON_FEATHER_SUNRISE } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-sunrise': IconFeatherElement
  }
}

export class IconFeatherSunriseElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SUNRISE
  }
}

defineCustomElement('icon-feather-sunrise', IconFeatherSunriseElement)
