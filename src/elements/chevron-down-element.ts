import { ICON_F_CHEVRON_DOWN } from '@aracna/icons-feather/assets/chevron-down'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-chevron-down': IconFeatherChevronDownElement
  }
}

export class IconFeatherChevronDownElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CHEVRON_DOWN
  }
}

defineCustomElement('icon-feather-chevron-down', IconFeatherChevronDownElement)
