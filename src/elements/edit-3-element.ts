import { ICON_F_EDIT_3 } from '@aracna/icons-feather/assets/edit-3'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-edit-3': IconFeatherEdit3Element
  }
}

export class IconFeatherEdit3Element extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_EDIT_3
  }
}

defineCustomElement('icon-feather-edit-3', IconFeatherEdit3Element)
