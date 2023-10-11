import { ICON_FEATHER_MESSAGE_CIRCLE } from '@aracna/icons-feather/assets/message-circle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-message-circle': IconFeatherElement
  }
}

export class IconFeatherMessageCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_MESSAGE_CIRCLE
  }
}

defineCustomElement('icon-feather-message-circle', IconFeatherMessageCircleElement)
