import { ICON_FEATHER_CHEVRONS_RIGHT } from '@aracna/icons-feather/assets/chevrons-right'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-chevrons-right': IconFeatherChevronsRightElement
  }
}

export class IconFeatherChevronsRightElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CHEVRONS_RIGHT
  }
}

defineCustomElement('icon-feather-chevrons-right', IconFeatherChevronsRightElement)
