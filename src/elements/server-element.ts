import { ICON_FEATHER_SERVER } from '@aracna/icons-feather/assets/server'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-server': IconFeatherServerElement
  }
}

export class IconFeatherServerElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SERVER
  }
}

defineCustomElement('icon-feather-server', IconFeatherServerElement)
