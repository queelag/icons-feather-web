import { ICON_FEATHER_MORE_VERTICAL } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-more-vertical': IconFeatherElement
  }
}

export class IconFeatherMoreVerticalElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_MORE_VERTICAL
  }
}

defineCustomElement('icon-feather-more-vertical', IconFeatherMoreVerticalElement)
