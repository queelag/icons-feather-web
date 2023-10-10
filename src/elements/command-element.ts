import { ICON_FEATHER_COMMAND } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-command': IconFeatherElement
  }
}

export class IconFeatherCommandElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_COMMAND
  }
}

defineCustomElement('icon-feather-command', IconFeatherCommandElement)
