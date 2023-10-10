import { ICON_FEATHER_TERMINAL } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-terminal': IconFeatherElement
  }
}

export class IconFeatherTerminalElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_TERMINAL
  }
}

defineCustomElement('icon-feather-terminal', IconFeatherTerminalElement)
