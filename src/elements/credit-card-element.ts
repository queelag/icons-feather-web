import { ICON_F_CREDIT_CARD } from '@aracna/icons-feather/assets/credit-card'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-credit-card': IconFeatherCreditCardElement
  }
}

export class IconFeatherCreditCardElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CREDIT_CARD
  }
}

defineCustomElement('icon-feather-credit-card', IconFeatherCreditCardElement)
