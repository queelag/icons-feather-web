import { ICON_F_MAXIMIZE_2 } from '@aracna/icons-feather/assets/maximize-2'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-maximize-2': IconFeatherMaximize2Element
  }
}

export class IconFeatherMaximize2Element extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_MAXIMIZE_2
  }
}

defineCustomElement('icon-feather-maximize-2', IconFeatherMaximize2Element)
