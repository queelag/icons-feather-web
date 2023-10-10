import { ICON_FEATHER_REFRESH_CW } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-refresh-cw': IconFeatherElement
  }
}

export class IconFeatherRefreshCwElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_REFRESH_CW
  }
}

defineCustomElement('icon-feather-refresh-cw', IconFeatherRefreshCwElement)
