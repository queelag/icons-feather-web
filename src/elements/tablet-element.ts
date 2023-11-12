import { ICON_F_TABLET } from '@aracna/icons-feather/assets/tablet'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-tablet': IconFeatherTabletElement
  }
}

export class IconFeatherTabletElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_TABLET
  }
}

defineCustomElement('icon-feather-tablet', IconFeatherTabletElement)
