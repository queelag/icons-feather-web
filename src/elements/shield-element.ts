import { ICON_FEATHER_SHIELD } from '@aracna/icons-feather/assets/shield'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-shield': IconFeatherElement
  }
}

export class IconFeatherShieldElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SHIELD
  }
}

defineCustomElement('icon-feather-shield', IconFeatherShieldElement)
