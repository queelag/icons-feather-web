import { ICON_F_FAST_FORWARD } from '@aracna/icons-feather/assets/fast-forward'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-fast-forward': IconFeatherFastForwardElement
  }
}

export class IconFeatherFastForwardElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_FAST_FORWARD
  }
}

defineCustomElement('icon-feather-fast-forward', IconFeatherFastForwardElement)
