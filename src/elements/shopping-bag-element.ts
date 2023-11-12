import { ICON_F_SHOPPING_BAG } from '@aracna/icons-feather/assets/shopping-bag'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-shopping-bag': IconFeatherShoppingBagElement
  }
}

export class IconFeatherShoppingBagElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_SHOPPING_BAG
  }
}

defineCustomElement('icon-feather-shopping-bag', IconFeatherShoppingBagElement)
