import { ICON_FEATHER_ARROW_RIGHT } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-right': IconFeatherElement
  }
}

export class IconFeatherArrowRightElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ARROW_RIGHT
  }
}

defineCustomElement('icon-feather-arrow-right', IconFeatherArrowRightElement)
