import { ICON_F_COMMAND } from '@aracna/icons-feather/assets/command'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-command': IconFeatherCommandElement
  }
}

export class IconFeatherCommandElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_COMMAND
  }
}

defineCustomElement('icon-feather-command', IconFeatherCommandElement)
