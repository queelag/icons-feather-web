import { ICON_FEATHER_HASH } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-hash': IconFeatherElement
  }
}

export class IconFeatherHashElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_HASH
  }
}

defineCustomElement('icon-feather-hash', IconFeatherHashElement)
