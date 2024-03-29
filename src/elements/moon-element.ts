import { ICON_F_MOON } from '@aracna/icons-feather/assets/moon'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-moon': IconFeatherMoonElement
  }
}

export class IconFeatherMoonElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_MOON
  }
}

defineCustomElement('icon-feather-moon', IconFeatherMoonElement)
