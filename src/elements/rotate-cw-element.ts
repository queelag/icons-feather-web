import { ICON_FEATHER_ROTATE_CW } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-rotate-cw': IconFeatherElement
  }
}

export class IconFeatherRotateCwElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ROTATE_CW
  }
}

defineCustomElement('icon-feather-rotate-cw', IconFeatherRotateCwElement)
