import { ICON_F_MORE_HORIZONTAL } from '@aracna/icons-feather/assets/more-horizontal'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-more-horizontal': IconFeatherMoreHorizontalElement
  }
}

export class IconFeatherMoreHorizontalElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_MORE_HORIZONTAL
  }
}

defineCustomElement('icon-feather-more-horizontal', IconFeatherMoreHorizontalElement)
