import { ICON_FEATHER_TOGGLE_RIGHT } from '@aracna/icons-feather/assets/toggle-right'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-toggle-right': IconFeatherToggleRightElement
  }
}

export class IconFeatherToggleRightElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_TOGGLE_RIGHT
  }
}

defineCustomElement('icon-feather-toggle-right', IconFeatherToggleRightElement)
