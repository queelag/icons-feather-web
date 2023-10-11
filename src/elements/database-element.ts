import { ICON_FEATHER_DATABASE } from '@aracna/icons-feather/assets/database'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-database': IconFeatherDatabaseElement
  }
}

export class IconFeatherDatabaseElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_DATABASE
  }
}

defineCustomElement('icon-feather-database', IconFeatherDatabaseElement)
