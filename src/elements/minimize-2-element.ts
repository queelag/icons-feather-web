import { ICON_F_MINIMIZE_2 } from '@aracna/icons-feather/assets/minimize-2'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-minimize-2': IconFeatherMinimize2Element
  }
}

export class IconFeatherMinimize2Element extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_MINIMIZE_2
  }
}

defineCustomElement('icon-feather-minimize-2', IconFeatherMinimize2Element)
