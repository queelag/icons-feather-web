import { ICON_FEATHER_TABLE } from '@aracna/icons-feather/assets/table'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-table': IconFeatherElement
  }
}

export class IconFeatherTableElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_TABLE
  }
}

defineCustomElement('icon-feather-table', IconFeatherTableElement)
