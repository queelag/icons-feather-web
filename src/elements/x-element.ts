import { ICON_F_X } from '@aracna/icons-feather/assets/x'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-x': IconFeatherXElement
  }
}

export class IconFeatherXElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_X
  }
}

defineCustomElement('icon-feather-x', IconFeatherXElement)
