import { ICON_F_MAXIMIZE } from '@aracna/icons-feather/assets/maximize'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-maximize': IconFeatherMaximizeElement
  }
}

export class IconFeatherMaximizeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_MAXIMIZE
  }
}

defineCustomElement('icon-feather-maximize', IconFeatherMaximizeElement)
