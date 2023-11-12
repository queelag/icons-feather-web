import { ICON_F_MAIL } from '@aracna/icons-feather/assets/mail'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-mail': IconFeatherMailElement
  }
}

export class IconFeatherMailElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_MAIL
  }
}

defineCustomElement('icon-feather-mail', IconFeatherMailElement)
