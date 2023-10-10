import { ICON_FEATHER_ARROW_UP_RIGHT } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-up-right': IconFeatherElement
  }
}

export class IconFeatherArrowUpRightElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ARROW_UP_RIGHT
  }
}

defineCustomElement('icon-feather-arrow-up-right', IconFeatherArrowUpRightElement)
