import { ICON_FEATHER_CORNER_UP_RIGHT } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-corner-up-right': IconFeatherElement
  }
}

export class IconFeatherCornerUpRightElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CORNER_UP_RIGHT
  }
}

defineCustomElement('icon-feather-corner-up-right', IconFeatherCornerUpRightElement)
