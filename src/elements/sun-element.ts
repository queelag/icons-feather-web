import { ICON_F_SUN } from '@aracna/icons-feather/assets/sun'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-sun': IconFeatherSunElement
  }
}

export class IconFeatherSunElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_SUN
  }
}

defineCustomElement('icon-feather-sun', IconFeatherSunElement)
