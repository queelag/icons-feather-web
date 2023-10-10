import { ICON_FEATHER_UNLOCK } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-unlock': IconFeatherElement
  }
}

export class IconFeatherUnlockElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_UNLOCK
  }
}

defineCustomElement('icon-feather-unlock', IconFeatherUnlockElement)
