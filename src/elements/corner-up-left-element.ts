import { ICON_FEATHER_CORNER_UP_LEFT } from '@aracna/icons-feather/assets/corner-up-left'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-corner-up-left': IconFeatherCornerUpLeftElement
  }
}

export class IconFeatherCornerUpLeftElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CORNER_UP_LEFT
  }
}

defineCustomElement('icon-feather-corner-up-left', IconFeatherCornerUpLeftElement)
