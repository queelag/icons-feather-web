import { ICON_FEATHER_CIRCLE } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-circle': IconFeatherElement
  }
}

export class IconFeatherCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CIRCLE
  }
}

defineCustomElement('icon-feather-circle', IconFeatherCircleElement)
