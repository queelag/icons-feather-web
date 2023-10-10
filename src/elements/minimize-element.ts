import { ICON_FEATHER_MINIMIZE } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-minimize': IconFeatherElement
  }
}

export class IconFeatherMinimizeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_MINIMIZE
  }
}

defineCustomElement('icon-feather-minimize', IconFeatherMinimizeElement)
