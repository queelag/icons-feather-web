import { ICON_F_STOP_CIRCLE } from '@aracna/icons-feather/assets/stop-circle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-stop-circle': IconFeatherStopCircleElement
  }
}

export class IconFeatherStopCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_STOP_CIRCLE
  }
}

defineCustomElement('icon-feather-stop-circle', IconFeatherStopCircleElement)
