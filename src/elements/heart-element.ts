import { ICON_F_HEART } from '@aracna/icons-feather/assets/heart'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-heart': IconFeatherHeartElement
  }
}

export class IconFeatherHeartElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_HEART
  }
}

defineCustomElement('icon-feather-heart', IconFeatherHeartElement)
