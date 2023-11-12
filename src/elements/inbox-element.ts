import { ICON_F_INBOX } from '@aracna/icons-feather/assets/inbox'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-inbox': IconFeatherInboxElement
  }
}

export class IconFeatherInboxElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_INBOX
  }
}

defineCustomElement('icon-feather-inbox', IconFeatherInboxElement)
