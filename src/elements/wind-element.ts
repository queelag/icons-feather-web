import { ICON_F_WIND } from '@aracna/icons-feather/assets/wind'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-wind': IconFeatherWindElement
  }
}

export class IconFeatherWindElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_WIND
  }
}

defineCustomElement('icon-feather-wind', IconFeatherWindElement)
