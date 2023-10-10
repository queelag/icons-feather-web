import { ICON_FEATHER_PLUS } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-plus': IconFeatherElement
  }
}

export class IconFeatherPlusElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PLUS
  }
}

defineCustomElement('icon-feather-plus', IconFeatherPlusElement)
