import { ICON_FEATHER_PHONE } from '@aracna/icons-feather/assets/phone'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-phone': IconFeatherElement
  }
}

export class IconFeatherPhoneElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PHONE
  }
}

defineCustomElement('icon-feather-phone', IconFeatherPhoneElement)
