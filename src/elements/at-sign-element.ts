import { ICON_F_AT_SIGN } from '@aracna/icons-feather/assets/at-sign'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-at-sign': IconFeatherAtSignElement
  }
}

export class IconFeatherAtSignElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_AT_SIGN
  }
}

defineCustomElement('icon-feather-at-sign', IconFeatherAtSignElement)
