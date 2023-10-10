import { ICON_FEATHER_SERVER } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-server': IconFeatherElement
  }
}

export class IconFeatherServerElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SERVER
  }
}

defineCustomElement('icon-feather-server', IconFeatherServerElement)
