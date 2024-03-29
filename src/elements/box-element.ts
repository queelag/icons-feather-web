import { ICON_F_BOX } from '@aracna/icons-feather/assets/box'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-box': IconFeatherBoxElement
  }
}

export class IconFeatherBoxElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_BOX
  }
}

defineCustomElement('icon-feather-box', IconFeatherBoxElement)
