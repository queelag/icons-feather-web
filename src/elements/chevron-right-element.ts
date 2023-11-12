import { ICON_F_CHEVRON_RIGHT } from '@aracna/icons-feather/assets/chevron-right'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-chevron-right': IconFeatherChevronRightElement
  }
}

export class IconFeatherChevronRightElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CHEVRON_RIGHT
  }
}

defineCustomElement('icon-feather-chevron-right', IconFeatherChevronRightElement)
