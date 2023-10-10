import { ICON_FEATHER_TRASH_2 } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-trash-2': IconFeatherElement
  }
}

export class IconFeatherTrash2Element extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_TRASH_2
  }
}

defineCustomElement('icon-feather-trash-2', IconFeatherTrash2Element)
