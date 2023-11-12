import { ICON_F_LINK_2 } from '@aracna/icons-feather/assets/link-2'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-link-2': IconFeatherLink2Element
  }
}

export class IconFeatherLink2Element extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_LINK_2
  }
}

defineCustomElement('icon-feather-link-2', IconFeatherLink2Element)
