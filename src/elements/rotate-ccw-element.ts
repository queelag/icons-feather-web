import { ICON_FEATHER_ROTATE_CCW } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-rotate-ccw': IconFeatherElement
  }
}

export class IconFeatherRotateCcwElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ROTATE_CCW
  }
}

defineCustomElement('icon-feather-rotate-ccw', IconFeatherRotateCcwElement)
