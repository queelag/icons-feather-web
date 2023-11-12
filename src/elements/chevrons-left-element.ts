import { ICON_F_CHEVRONS_LEFT } from '@aracna/icons-feather/assets/chevrons-left'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-chevrons-left': IconFeatherChevronsLeftElement
  }
}

export class IconFeatherChevronsLeftElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CHEVRONS_LEFT
  }
}

defineCustomElement('icon-feather-chevrons-left', IconFeatherChevronsLeftElement)
