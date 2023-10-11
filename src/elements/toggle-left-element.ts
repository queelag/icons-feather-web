import { ICON_FEATHER_TOGGLE_LEFT } from '@aracna/icons-feather/assets/toggle-left'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-toggle-left': IconFeatherElement
  }
}

export class IconFeatherToggleLeftElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_TOGGLE_LEFT
  }
}

defineCustomElement('icon-feather-toggle-left', IconFeatherToggleLeftElement)
