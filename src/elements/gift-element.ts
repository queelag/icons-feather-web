import { ICON_FEATHER_GIFT } from '@aracna/icons-feather/assets/gift'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-gift': IconFeatherGiftElement
  }
}

export class IconFeatherGiftElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_GIFT
  }
}

defineCustomElement('icon-feather-gift', IconFeatherGiftElement)
