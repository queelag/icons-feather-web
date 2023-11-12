import { ICON_F_PERCENT } from '@aracna/icons-feather/assets/percent'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-percent': IconFeatherPercentElement
  }
}

export class IconFeatherPercentElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_PERCENT
  }
}

defineCustomElement('icon-feather-percent', IconFeatherPercentElement)
