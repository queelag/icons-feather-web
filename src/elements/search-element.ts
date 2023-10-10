import { ICON_FEATHER_SEARCH } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-search': IconFeatherElement
  }
}

export class IconFeatherSearchElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SEARCH
  }
}

defineCustomElement('icon-feather-search', IconFeatherSearchElement)
