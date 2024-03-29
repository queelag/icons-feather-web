import { ICON_F_PHONE_OFF } from '@aracna/icons-feather/assets/phone-off'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-phone-off': IconFeatherPhoneOffElement
  }
}

export class IconFeatherPhoneOffElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_PHONE_OFF
  }
}

defineCustomElement('icon-feather-phone-off', IconFeatherPhoneOffElement)
