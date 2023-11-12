import { ICON_F_CHEVRON_UP } from '@aracna/icons-feather/assets/chevron-up'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-chevron-up': IconFeatherChevronUpElement
  }
}

export class IconFeatherChevronUpElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CHEVRON_UP
  }
}

defineCustomElement('icon-feather-chevron-up', IconFeatherChevronUpElement)
