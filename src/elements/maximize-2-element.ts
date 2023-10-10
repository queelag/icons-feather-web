import { ICON_FEATHER_MAXIMIZE_2 } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-maximize-2': IconFeatherElement
  }
}

export class IconFeatherMaximize2Element extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_MAXIMIZE_2
  }
}

defineCustomElement('icon-feather-maximize-2', IconFeatherMaximize2Element)
