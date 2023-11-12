import { ICON_F_SMARTPHONE } from '@aracna/icons-feather/assets/smartphone'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-smartphone': IconFeatherSmartphoneElement
  }
}

export class IconFeatherSmartphoneElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_SMARTPHONE
  }
}

defineCustomElement('icon-feather-smartphone', IconFeatherSmartphoneElement)
