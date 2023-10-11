import { ICON_FEATHER_LINK } from '@aracna/icons-feather/assets/link'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-link': IconFeatherElement
  }
}

export class IconFeatherLinkElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_LINK
  }
}

defineCustomElement('icon-feather-link', IconFeatherLinkElement)
