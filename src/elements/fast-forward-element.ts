import { ICON_FEATHER_FAST_FORWARD } from '@aracna/icons-feather/assets/fast-forward'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-fast-forward': IconFeatherElement
  }
}

export class IconFeatherFastForwardElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_FAST_FORWARD
  }
}

defineCustomElement('icon-feather-fast-forward', IconFeatherFastForwardElement)
