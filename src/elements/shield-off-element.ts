import { ICON_F_SHIELD_OFF } from '@aracna/icons-feather/assets/shield-off'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-shield-off': IconFeatherShieldOffElement
  }
}

export class IconFeatherShieldOffElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_SHIELD_OFF
  }
}

defineCustomElement('icon-feather-shield-off', IconFeatherShieldOffElement)
