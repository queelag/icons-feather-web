import { ICON_F_PRINTER } from '@aracna/icons-feather/assets/printer'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-printer': IconFeatherPrinterElement
  }
}

export class IconFeatherPrinterElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_PRINTER
  }
}

defineCustomElement('icon-feather-printer', IconFeatherPrinterElement)
