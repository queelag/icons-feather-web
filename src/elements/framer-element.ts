import { ICON_F_FRAMER } from '@aracna/icons-feather/assets/framer'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-framer': IconFeatherFramerElement
  }
}

export class IconFeatherFramerElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_FRAMER
  }
}

defineCustomElement('icon-feather-framer', IconFeatherFramerElement)
