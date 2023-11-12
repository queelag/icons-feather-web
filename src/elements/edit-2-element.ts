import { ICON_F_EDIT_2 } from '@aracna/icons-feather/assets/edit-2'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-edit-2': IconFeatherEdit2Element
  }
}

export class IconFeatherEdit2Element extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_EDIT_2
  }
}

defineCustomElement('icon-feather-edit-2', IconFeatherEdit2Element)
