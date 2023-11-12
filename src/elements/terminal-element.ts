import { ICON_F_TERMINAL } from '@aracna/icons-feather/assets/terminal'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-terminal': IconFeatherTerminalElement
  }
}

export class IconFeatherTerminalElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_TERMINAL
  }
}

defineCustomElement('icon-feather-terminal', IconFeatherTerminalElement)
