import { ICON_F_PHONE_INCOMING } from '@aracna/icons-feather/assets/phone-incoming'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-phone-incoming': IconFeatherPhoneIncomingElement
  }
}

export class IconFeatherPhoneIncomingElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_PHONE_INCOMING
  }
}

defineCustomElement('icon-feather-phone-incoming', IconFeatherPhoneIncomingElement)
