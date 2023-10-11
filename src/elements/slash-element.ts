import { ICON_FEATHER_SLASH } from '@aracna/icons-feather/assets/slash'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-slash': IconFeatherElement
  }
}

export class IconFeatherSlashElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SLASH
  }
}

defineCustomElement('icon-feather-slash', IconFeatherSlashElement)
