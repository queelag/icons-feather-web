import { ICON_FEATHER_PAUSE_CIRCLE } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-pause-circle': IconFeatherElement
  }
}

export class IconFeatherPauseCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PAUSE_CIRCLE
  }
}

defineCustomElement('icon-feather-pause-circle', IconFeatherPauseCircleElement)
