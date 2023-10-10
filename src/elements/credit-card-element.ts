import { ICON_FEATHER_CREDIT_CARD } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-credit-card': IconFeatherElement
  }
}

export class IconFeatherCreditCardElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CREDIT_CARD
  }
}

defineCustomElement('icon-feather-credit-card', IconFeatherCreditCardElement)
