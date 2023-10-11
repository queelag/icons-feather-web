import { ICON_FEATHER_X_CIRCLE } from '@aracna/icons-feather/assets/x-circle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-x-circle': IconFeatherXCircleElement
  }
}

export class IconFeatherXCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_X_CIRCLE
  }
}

defineCustomElement('icon-feather-x-circle', IconFeatherXCircleElement)
