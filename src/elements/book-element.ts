import { ICON_F_BOOK } from '@aracna/icons-feather/assets/book'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-book': IconFeatherBookElement
  }
}

export class IconFeatherBookElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_BOOK
  }
}

defineCustomElement('icon-feather-book', IconFeatherBookElement)
