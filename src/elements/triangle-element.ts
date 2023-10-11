import { ICON_FEATHER_TRIANGLE } from '@aracna/icons-feather/assets/triangle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-triangle': IconFeatherTriangleElement
  }
}

export class IconFeatherTriangleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_TRIANGLE
  }
}

defineCustomElement('icon-feather-triangle', IconFeatherTriangleElement)
