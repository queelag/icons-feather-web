import { ICON_F_ALERT_CIRCLE } from '@aracna/icons-feather/assets/alert-circle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-alert-circle': IconFeatherAlertCircleElement
  }
}

export class IconFeatherAlertCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_ALERT_CIRCLE
  }
}

defineCustomElement('icon-feather-alert-circle', IconFeatherAlertCircleElement)
