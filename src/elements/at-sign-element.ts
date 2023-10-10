import { ICON_FEATHER_AT_SIGN } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-at-sign': IconFeatherElement
  }
}

export class IconFeatherAtSignElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_AT_SIGN
  }
}

defineCustomElement('icon-feather-at-sign', IconFeatherAtSignElement)
