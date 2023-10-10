import { ICON_FEATHER_PERCENT } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-percent': IconFeatherElement
  }
}

export class IconFeatherPercentElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PERCENT
  }
}

defineCustomElement('icon-feather-percent', IconFeatherPercentElement)
