import { ICON_FEATHER_PHONE_CALL } from '@aracna/icons-feather/assets/phone-call'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-phone-call': IconFeatherPhoneCallElement
  }
}

export class IconFeatherPhoneCallElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PHONE_CALL
  }
}

defineCustomElement('icon-feather-phone-call', IconFeatherPhoneCallElement)
