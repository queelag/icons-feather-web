import { ICON_FEATHER_CLOCK } from '@aracna/icons-feather/assets/clock'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-clock': IconFeatherElement
  }
}

export class IconFeatherClockElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CLOCK
  }
}

defineCustomElement('icon-feather-clock', IconFeatherClockElement)
