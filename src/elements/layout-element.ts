import { ICON_FEATHER_LAYOUT } from '@aracna/icons-feather/assets/layout'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-layout': IconFeatherLayoutElement
  }
}

export class IconFeatherLayoutElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_LAYOUT
  }
}

defineCustomElement('icon-feather-layout', IconFeatherLayoutElement)
