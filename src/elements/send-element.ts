import { ICON_F_SEND } from '@aracna/icons-feather/assets/send'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-send': IconFeatherSendElement
  }
}

export class IconFeatherSendElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_SEND
  }
}

defineCustomElement('icon-feather-send', IconFeatherSendElement)
