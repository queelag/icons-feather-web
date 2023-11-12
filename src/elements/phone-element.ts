import { ICON_F_PHONE } from '@aracna/icons-feather/assets/phone'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-phone': IconFeatherPhoneElement
  }
}

export class IconFeatherPhoneElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_PHONE
  }
}

defineCustomElement('icon-feather-phone', IconFeatherPhoneElement)
