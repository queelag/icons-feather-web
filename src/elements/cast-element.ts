import { ICON_FEATHER_CAST } from '@aracna/icons-feather/assets/cast'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-cast': IconFeatherCastElement
  }
}

export class IconFeatherCastElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CAST
  }
}

defineCustomElement('icon-feather-cast', IconFeatherCastElement)
