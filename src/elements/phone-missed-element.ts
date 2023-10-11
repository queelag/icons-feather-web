import { ICON_FEATHER_PHONE_MISSED } from '@aracna/icons-feather/assets/phone-missed'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-phone-missed': IconFeatherPhoneMissedElement
  }
}

export class IconFeatherPhoneMissedElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PHONE_MISSED
  }
}

defineCustomElement('icon-feather-phone-missed', IconFeatherPhoneMissedElement)
