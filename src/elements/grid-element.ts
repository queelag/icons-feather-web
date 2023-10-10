import { ICON_FEATHER_GRID } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-grid': IconFeatherElement
  }
}

export class IconFeatherGridElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_GRID
  }
}

defineCustomElement('icon-feather-grid', IconFeatherGridElement)
