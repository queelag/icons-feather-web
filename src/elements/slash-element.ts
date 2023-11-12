import { ICON_F_SLASH } from '@aracna/icons-feather/assets/slash'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-slash': IconFeatherSlashElement
  }
}

export class IconFeatherSlashElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_SLASH
  }
}

defineCustomElement('icon-feather-slash', IconFeatherSlashElement)
