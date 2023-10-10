import { ICON_FEATHER_WIND } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-wind': IconFeatherElement
  }
}

export class IconFeatherWindElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_WIND
  }
}

defineCustomElement('icon-feather-wind', IconFeatherWindElement)
