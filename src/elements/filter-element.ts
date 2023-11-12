import { ICON_F_FILTER } from '@aracna/icons-feather/assets/filter'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-filter': IconFeatherFilterElement
  }
}

export class IconFeatherFilterElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_FILTER
  }
}

defineCustomElement('icon-feather-filter', IconFeatherFilterElement)
