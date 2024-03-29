import { ICON_F_SHARE_2 } from '@aracna/icons-feather/assets/share-2'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-share-2': IconFeatherShare2Element
  }
}

export class IconFeatherShare2Element extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_SHARE_2
  }
}

defineCustomElement('icon-feather-share-2', IconFeatherShare2Element)
