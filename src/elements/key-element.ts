import { ICON_FEATHER_KEY } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-key': IconFeatherElement
  }
}

export class IconFeatherKeyElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_KEY
  }
}

defineCustomElement('icon-feather-key', IconFeatherKeyElement)
