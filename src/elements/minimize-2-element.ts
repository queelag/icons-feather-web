import { ICON_FEATHER_MINIMIZE_2 } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-minimize-2': IconFeatherElement
  }
}

export class IconFeatherMinimize2Element extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_MINIMIZE_2
  }
}

defineCustomElement('icon-feather-minimize-2', IconFeatherMinimize2Element)
