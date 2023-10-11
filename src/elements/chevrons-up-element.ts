import { ICON_FEATHER_CHEVRONS_UP } from '@aracna/icons-feather/assets/chevrons-up'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-chevrons-up': IconFeatherElement
  }
}

export class IconFeatherChevronsUpElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CHEVRONS_UP
  }
}

defineCustomElement('icon-feather-chevrons-up', IconFeatherChevronsUpElement)
