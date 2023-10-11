import { ICON_FEATHER_POCKET } from '@aracna/icons-feather/assets/pocket'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-pocket': IconFeatherElement
  }
}

export class IconFeatherPocketElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_POCKET
  }
}

defineCustomElement('icon-feather-pocket', IconFeatherPocketElement)
