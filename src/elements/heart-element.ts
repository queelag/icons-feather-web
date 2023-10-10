import { ICON_FEATHER_HEART } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-heart': IconFeatherElement
  }
}

export class IconFeatherHeartElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_HEART
  }
}

defineCustomElement('icon-feather-heart', IconFeatherHeartElement)
