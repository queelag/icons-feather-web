import { ICON_FEATHER_SHOPPING_BAG } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-shopping-bag': IconFeatherElement
  }
}

export class IconFeatherShoppingBagElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SHOPPING_BAG
  }
}

defineCustomElement('icon-feather-shopping-bag', IconFeatherShoppingBagElement)
