import { ICON_FEATHER_SUNSET } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-sunset': IconFeatherElement
  }
}

export class IconFeatherSunsetElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SUNSET
  }
}

defineCustomElement('icon-feather-sunset', IconFeatherSunsetElement)
