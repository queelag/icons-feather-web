import { ICON_FEATHER_SMARTPHONE } from '@aracna/icons-feather/assets/smartphone'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-smartphone': IconFeatherElement
  }
}

export class IconFeatherSmartphoneElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SMARTPHONE
  }
}

defineCustomElement('icon-feather-smartphone', IconFeatherSmartphoneElement)
