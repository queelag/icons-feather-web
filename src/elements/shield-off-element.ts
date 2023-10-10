import { ICON_FEATHER_SHIELD_OFF } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-shield-off': IconFeatherElement
  }
}

export class IconFeatherShieldOffElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SHIELD_OFF
  }
}

defineCustomElement('icon-feather-shield-off', IconFeatherShieldOffElement)
