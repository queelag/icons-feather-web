import { ICON_FEATHER_INSTAGRAM } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-instagram': IconFeatherElement
  }
}

export class IconFeatherInstagramElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_INSTAGRAM
  }
}

defineCustomElement('icon-feather-instagram', IconFeatherInstagramElement)
