import { ICON_FEATHER_ALERT_OCTAGON } from '@aracna/icons-feather/assets/alert-octagon'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-alert-octagon': IconFeatherAlertOctagonElement
  }
}

export class IconFeatherAlertOctagonElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ALERT_OCTAGON
  }
}

defineCustomElement('icon-feather-alert-octagon', IconFeatherAlertOctagonElement)
