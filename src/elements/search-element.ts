import { ICON_F_SEARCH } from '@aracna/icons-feather/assets/search'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-search': IconFeatherSearchElement
  }
}

export class IconFeatherSearchElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_SEARCH
  }
}

defineCustomElement('icon-feather-search', IconFeatherSearchElement)
