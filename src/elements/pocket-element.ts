import { ICON_F_POCKET } from '@aracna/icons-feather/assets/pocket'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-pocket': IconFeatherPocketElement
  }
}

export class IconFeatherPocketElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_POCKET
  }
}

defineCustomElement('icon-feather-pocket', IconFeatherPocketElement)
