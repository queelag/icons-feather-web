import { ICON_FEATHER_SEND } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-send': IconFeatherElement
  }
}

export class IconFeatherSendElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SEND
  }
}

defineCustomElement('icon-feather-send', IconFeatherSendElement)
