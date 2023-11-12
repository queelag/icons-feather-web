import { ICON_F_KEY } from '@aracna/icons-feather/assets/key'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-key': IconFeatherKeyElement
  }
}

export class IconFeatherKeyElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_KEY
  }
}

defineCustomElement('icon-feather-key', IconFeatherKeyElement)
