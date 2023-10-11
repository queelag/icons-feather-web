import { ICON_FEATHER_TWITTER } from '@aracna/icons-feather/assets/twitter'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-twitter': IconFeatherTwitterElement
  }
}

export class IconFeatherTwitterElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_TWITTER
  }
}

defineCustomElement('icon-feather-twitter', IconFeatherTwitterElement)
