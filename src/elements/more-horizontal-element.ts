import { ICON_FEATHER_MORE_HORIZONTAL } from '@aracna/icons-feather/assets/more-horizontal'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-more-horizontal': IconFeatherElement
  }
}

export class IconFeatherMoreHorizontalElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_MORE_HORIZONTAL
  }
}

defineCustomElement('icon-feather-more-horizontal', IconFeatherMoreHorizontalElement)
