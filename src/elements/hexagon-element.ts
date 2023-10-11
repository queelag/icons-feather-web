import { ICON_FEATHER_HEXAGON } from '@aracna/icons-feather/assets/hexagon'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-hexagon': IconFeatherElement
  }
}

export class IconFeatherHexagonElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_HEXAGON
  }
}

defineCustomElement('icon-feather-hexagon', IconFeatherHexagonElement)
