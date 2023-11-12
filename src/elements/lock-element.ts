import { ICON_F_LOCK } from '@aracna/icons-feather/assets/lock'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-lock': IconFeatherLockElement
  }
}

export class IconFeatherLockElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_LOCK
  }
}

defineCustomElement('icon-feather-lock', IconFeatherLockElement)
