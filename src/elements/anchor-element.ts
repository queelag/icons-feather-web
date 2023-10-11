import { ICON_FEATHER_ANCHOR } from '@aracna/icons-feather/assets/anchor'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-anchor': IconFeatherAnchorElement
  }
}

export class IconFeatherAnchorElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ANCHOR
  }
}

defineCustomElement('icon-feather-anchor', IconFeatherAnchorElement)
