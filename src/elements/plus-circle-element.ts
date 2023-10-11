import { ICON_FEATHER_PLUS_CIRCLE } from '@aracna/icons-feather/assets/plus-circle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-plus-circle': IconFeatherPlusCircleElement
  }
}

export class IconFeatherPlusCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PLUS_CIRCLE
  }
}

defineCustomElement('icon-feather-plus-circle', IconFeatherPlusCircleElement)
