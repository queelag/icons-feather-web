import { ICON_FEATHER_PHONE_OUTGOING } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-phone-outgoing': IconFeatherElement
  }
}

export class IconFeatherPhoneOutgoingElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PHONE_OUTGOING
  }
}

defineCustomElement('icon-feather-phone-outgoing', IconFeatherPhoneOutgoingElement)
