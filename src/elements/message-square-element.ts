import { ICON_FEATHER_MESSAGE_SQUARE } from '@aracna/icons-feather/assets/message-square'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-message-square': IconFeatherMessageSquareElement
  }
}

export class IconFeatherMessageSquareElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_MESSAGE_SQUARE
  }
}

defineCustomElement('icon-feather-message-square', IconFeatherMessageSquareElement)
