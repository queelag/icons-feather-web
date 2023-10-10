import { ICON_FEATHER_EDIT_2 } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-edit-2': IconFeatherElement
  }
}

export class IconFeatherEdit2Element extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_EDIT_2
  }
}

defineCustomElement('icon-feather-edit-2', IconFeatherEdit2Element)
