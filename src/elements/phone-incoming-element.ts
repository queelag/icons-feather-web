import { ICON_FEATHER_PHONE_INCOMING } from '@aracna/icons-feather/assets/phone-incoming'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-phone-incoming': IconFeatherElement
  }
}

export class IconFeatherPhoneIncomingElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PHONE_INCOMING
  }
}

defineCustomElement('icon-feather-phone-incoming', IconFeatherPhoneIncomingElement)
