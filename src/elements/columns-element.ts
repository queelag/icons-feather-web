import { ICON_F_COLUMNS } from '@aracna/icons-feather/assets/columns'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-columns': IconFeatherColumnsElement
  }
}

export class IconFeatherColumnsElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_COLUMNS
  }
}

defineCustomElement('icon-feather-columns', IconFeatherColumnsElement)
