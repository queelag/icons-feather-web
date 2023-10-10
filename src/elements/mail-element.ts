import { ICON_FEATHER_MAIL } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-mail': IconFeatherElement
  }
}

export class IconFeatherMailElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_MAIL
  }
}

defineCustomElement('icon-feather-mail', IconFeatherMailElement)
