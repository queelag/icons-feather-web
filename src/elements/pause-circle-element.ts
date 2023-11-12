import { ICON_F_PAUSE_CIRCLE } from '@aracna/icons-feather/assets/pause-circle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-pause-circle': IconFeatherPauseCircleElement
  }
}

export class IconFeatherPauseCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_PAUSE_CIRCLE
  }
}

defineCustomElement('icon-feather-pause-circle', IconFeatherPauseCircleElement)
