import { ICON_F_CHECK_CIRCLE } from '@aracna/icons-feather/assets/check-circle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-check-circle': IconFeatherCheckCircleElement
  }
}

export class IconFeatherCheckCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CHECK_CIRCLE
  }
}

defineCustomElement('icon-feather-check-circle', IconFeatherCheckCircleElement)
