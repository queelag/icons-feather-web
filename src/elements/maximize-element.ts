import { ICON_FEATHER_MAXIMIZE } from '@aracna/icons-feather/assets/maximize'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-maximize': IconFeatherElement
  }
}

export class IconFeatherMaximizeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_MAXIMIZE
  }
}

defineCustomElement('icon-feather-maximize', IconFeatherMaximizeElement)
