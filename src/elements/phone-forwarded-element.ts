import { ICON_FEATHER_PHONE_FORWARDED } from '@aracna/icons-feather/assets/phone-forwarded'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-phone-forwarded': IconFeatherElement
  }
}

export class IconFeatherPhoneForwardedElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PHONE_FORWARDED
  }
}

defineCustomElement('icon-feather-phone-forwarded', IconFeatherPhoneForwardedElement)
