import { ICON_F_INSTAGRAM } from '@aracna/icons-feather/assets/instagram'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-instagram': IconFeatherInstagramElement
  }
}

export class IconFeatherInstagramElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_INSTAGRAM
  }
}

defineCustomElement('icon-feather-instagram', IconFeatherInstagramElement)
