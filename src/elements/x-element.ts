import { ICON_FEATHER_X } from '@aracna/icons-feather/assets/x'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-x': IconFeatherElement
  }
}

export class IconFeatherXElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_X
  }
}

defineCustomElement('icon-feather-x', IconFeatherXElement)
