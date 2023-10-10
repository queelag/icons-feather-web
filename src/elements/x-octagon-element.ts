import { ICON_FEATHER_X_OCTAGON } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-x-octagon': IconFeatherElement
  }
}

export class IconFeatherXOctagonElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_X_OCTAGON
  }
}

defineCustomElement('icon-feather-x-octagon', IconFeatherXOctagonElement)
