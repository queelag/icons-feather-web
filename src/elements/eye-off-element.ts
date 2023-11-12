import { ICON_F_EYE_OFF } from '@aracna/icons-feather/assets/eye-off'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-eye-off': IconFeatherEyeOffElement
  }
}

export class IconFeatherEyeOffElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_EYE_OFF
  }
}

defineCustomElement('icon-feather-eye-off', IconFeatherEyeOffElement)
