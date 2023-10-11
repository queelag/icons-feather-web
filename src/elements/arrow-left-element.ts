import { ICON_FEATHER_ARROW_LEFT } from '@aracna/icons-feather/assets/arrow-left'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-left': IconFeatherElement
  }
}

export class IconFeatherArrowLeftElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ARROW_LEFT
  }
}

defineCustomElement('icon-feather-arrow-left', IconFeatherArrowLeftElement)
