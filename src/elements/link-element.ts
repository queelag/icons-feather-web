import { ICON_F_LINK } from '@aracna/icons-feather/assets/link'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-link': IconFeatherLinkElement
  }
}

export class IconFeatherLinkElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_LINK
  }
}

defineCustomElement('icon-feather-link', IconFeatherLinkElement)
