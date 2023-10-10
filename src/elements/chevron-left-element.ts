import { ICON_FEATHER_CHEVRON_LEFT } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-chevron-left': IconFeatherElement
  }
}

export class IconFeatherChevronLeftElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CHEVRON_LEFT
  }
}

defineCustomElement('icon-feather-chevron-left', IconFeatherChevronLeftElement)
