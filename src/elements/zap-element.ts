import { ICON_F_ZAP } from '@aracna/icons-feather/assets/zap'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-zap': IconFeatherZapElement
  }
}

export class IconFeatherZapElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_ZAP
  }
}

defineCustomElement('icon-feather-zap', IconFeatherZapElement)
