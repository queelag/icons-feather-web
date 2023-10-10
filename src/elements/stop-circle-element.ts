import { ICON_FEATHER_STOP_CIRCLE } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-stop-circle': IconFeatherElement
  }
}

export class IconFeatherStopCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_STOP_CIRCLE
  }
}

defineCustomElement('icon-feather-stop-circle', IconFeatherStopCircleElement)
