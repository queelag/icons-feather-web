import { ICON_FEATHER_REFRESH_CW } from '@aracna/icons-feather/assets/refresh-cw'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-refresh-cw': IconFeatherRefreshCwElement
  }
}

export class IconFeatherRefreshCwElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_REFRESH_CW
  }
}

defineCustomElement('icon-feather-refresh-cw', IconFeatherRefreshCwElement)
