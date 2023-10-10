import { ICON_FEATHER_COLUMNS } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-columns': IconFeatherElement
  }
}

export class IconFeatherColumnsElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_COLUMNS
  }
}

defineCustomElement('icon-feather-columns', IconFeatherColumnsElement)
