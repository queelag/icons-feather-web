import { ICON_FEATHER_ZAP_OFF } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-zap-off': IconFeatherElement
  }
}

export class IconFeatherZapOffElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ZAP_OFF
  }
}

defineCustomElement('icon-feather-zap-off', IconFeatherZapOffElement)
