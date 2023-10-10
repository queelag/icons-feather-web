import { ICON_FEATHER_OCTAGON } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-octagon': IconFeatherElement
  }
}

export class IconFeatherOctagonElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_OCTAGON
  }
}

defineCustomElement('icon-feather-octagon', IconFeatherOctagonElement)
