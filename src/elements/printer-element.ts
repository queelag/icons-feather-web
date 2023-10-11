import { ICON_FEATHER_PRINTER } from '@aracna/icons-feather/assets/printer'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-printer': IconFeatherElement
  }
}

export class IconFeatherPrinterElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PRINTER
  }
}

defineCustomElement('icon-feather-printer', IconFeatherPrinterElement)
