import { ICON_F_TRASH_2 } from '@aracna/icons-feather/assets/trash-2'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-trash-2': IconFeatherTrash2Element
  }
}

export class IconFeatherTrash2Element extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_TRASH_2
  }
}

defineCustomElement('icon-feather-trash-2', IconFeatherTrash2Element)
