import { ICON_FEATHER_REFRESH_CCW } from '@aracna/icons-feather/assets/refresh-ccw'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-refresh-ccw': IconFeatherRefreshCcwElement
  }
}

export class IconFeatherRefreshCcwElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_REFRESH_CCW
  }
}

defineCustomElement('icon-feather-refresh-ccw', IconFeatherRefreshCcwElement)
