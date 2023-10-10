import { ICON_FEATHER_CHEVRON_UP } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-chevron-up': IconFeatherElement
  }
}

export class IconFeatherChevronUpElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CHEVRON_UP
  }
}

defineCustomElement('icon-feather-chevron-up', IconFeatherChevronUpElement)
