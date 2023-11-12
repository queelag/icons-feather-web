import { ICON_F_CIRCLE } from '@aracna/icons-feather/assets/circle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-circle': IconFeatherCircleElement
  }
}

export class IconFeatherCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CIRCLE
  }
}

defineCustomElement('icon-feather-circle', IconFeatherCircleElement)
