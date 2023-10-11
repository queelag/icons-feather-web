import { ICON_FEATHER_CHEVRON_RIGHT } from '@aracna/icons-feather/assets/chevron-right'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-chevron-right': IconFeatherElement
  }
}

export class IconFeatherChevronRightElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CHEVRON_RIGHT
  }
}

defineCustomElement('icon-feather-chevron-right', IconFeatherChevronRightElement)
