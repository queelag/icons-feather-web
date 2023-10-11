import { ICON_FEATHER_SUNSET } from '@aracna/icons-feather/assets/sunset'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-sunset': IconFeatherSunsetElement
  }
}

export class IconFeatherSunsetElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SUNSET
  }
}

defineCustomElement('icon-feather-sunset', IconFeatherSunsetElement)
