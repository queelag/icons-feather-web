import { ICON_FEATHER_BOOKMARK } from '@aracna/icons-feather/assets/bookmark'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-bookmark': IconFeatherBookmarkElement
  }
}

export class IconFeatherBookmarkElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_BOOKMARK
  }
}

defineCustomElement('icon-feather-bookmark', IconFeatherBookmarkElement)
