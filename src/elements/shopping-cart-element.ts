import { ICON_F_SHOPPING_CART } from '@aracna/icons-feather/assets/shopping-cart'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-shopping-cart': IconFeatherShoppingCartElement
  }
}

export class IconFeatherShoppingCartElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_SHOPPING_CART
  }
}

defineCustomElement('icon-feather-shopping-cart', IconFeatherShoppingCartElement)
