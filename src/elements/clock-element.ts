import { ICON_F_CLOCK } from '@aracna/icons-feather/assets/clock'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-clock': IconFeatherClockElement
  }
}

export class IconFeatherClockElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CLOCK
  }
}

defineCustomElement('icon-feather-clock', IconFeatherClockElement)
