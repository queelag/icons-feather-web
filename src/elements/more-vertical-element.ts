import { ICON_F_MORE_VERTICAL } from '@aracna/icons-feather/assets/more-vertical'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-more-vertical': IconFeatherMoreVerticalElement
  }
}

export class IconFeatherMoreVerticalElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_MORE_VERTICAL
  }
}

defineCustomElement('icon-feather-more-vertical', IconFeatherMoreVerticalElement)
