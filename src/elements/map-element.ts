import { ICON_FEATHER_MAP } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-map': IconFeatherElement
  }
}

export class IconFeatherMapElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_MAP
  }
}

defineCustomElement('icon-feather-map', IconFeatherMapElement)
