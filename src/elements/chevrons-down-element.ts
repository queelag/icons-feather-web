import { ICON_FEATHER_CHEVRONS_DOWN } from '@aracna/icons-feather/assets/chevrons-down'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-chevrons-down': IconFeatherChevronsDownElement
  }
}

export class IconFeatherChevronsDownElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CHEVRONS_DOWN
  }
}

defineCustomElement('icon-feather-chevrons-down', IconFeatherChevronsDownElement)
