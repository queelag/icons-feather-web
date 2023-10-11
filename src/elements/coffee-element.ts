import { ICON_FEATHER_COFFEE } from '@aracna/icons-feather/assets/coffee'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-coffee': IconFeatherCoffeeElement
  }
}

export class IconFeatherCoffeeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_COFFEE
  }
}

defineCustomElement('icon-feather-coffee', IconFeatherCoffeeElement)
