import { ICON_F_PHONE_OUTGOING } from '@aracna/icons-feather/assets/phone-outgoing'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-phone-outgoing': IconFeatherPhoneOutgoingElement
  }
}

export class IconFeatherPhoneOutgoingElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_PHONE_OUTGOING
  }
}

defineCustomElement('icon-feather-phone-outgoing', IconFeatherPhoneOutgoingElement)
