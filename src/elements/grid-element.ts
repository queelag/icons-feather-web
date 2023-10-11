import { ICON_FEATHER_GRID } from '@aracna/icons-feather/assets/grid'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-grid': IconFeatherGridElement
  }
}

export class IconFeatherGridElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_GRID
  }
}

defineCustomElement('icon-feather-grid', IconFeatherGridElement)
