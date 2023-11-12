import { ICON_F_HASH } from '@aracna/icons-feather/assets/hash'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-hash': IconFeatherHashElement
  }
}

export class IconFeatherHashElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_HASH
  }
}

defineCustomElement('icon-feather-hash', IconFeatherHashElement)
