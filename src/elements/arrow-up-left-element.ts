import { ICON_FEATHER_ARROW_UP_LEFT } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-arrow-up-left': IconFeatherElement
  }
}

export class IconFeatherArrowUpLeftElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ARROW_UP_LEFT
  }
}

defineCustomElement('icon-feather-arrow-up-left', IconFeatherArrowUpLeftElement)
