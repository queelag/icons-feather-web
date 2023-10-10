import { ICON_FEATHER_CHECK_CIRCLE } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-check-circle': IconFeatherElement
  }
}

export class IconFeatherCheckCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CHECK_CIRCLE
  }
}

defineCustomElement('icon-feather-check-circle', IconFeatherCheckCircleElement)
