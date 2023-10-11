import { ICON_FEATHER_BOOK_OPEN } from '@aracna/icons-feather/assets/book-open'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-book-open': IconFeatherBookOpenElement
  }
}

export class IconFeatherBookOpenElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_BOOK_OPEN
  }
}

defineCustomElement('icon-feather-book-open', IconFeatherBookOpenElement)
