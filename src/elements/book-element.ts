import { ICON_FEATHER_BOOK } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-book': IconFeatherElement
  }
}

export class IconFeatherBookElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_BOOK
  }
}

defineCustomElement('icon-feather-book', IconFeatherBookElement)
