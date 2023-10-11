import { ICON_FEATHER_GLOBE } from '@aracna/icons-feather/assets/globe'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-globe': IconFeatherGlobeElement
  }
}

export class IconFeatherGlobeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_GLOBE
  }
}

defineCustomElement('icon-feather-globe', IconFeatherGlobeElement)
