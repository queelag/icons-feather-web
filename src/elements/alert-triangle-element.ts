import { ICON_F_ALERT_TRIANGLE } from '@aracna/icons-feather/assets/alert-triangle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-alert-triangle': IconFeatherAlertTriangleElement
  }
}

export class IconFeatherAlertTriangleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_ALERT_TRIANGLE
  }
}

defineCustomElement('icon-feather-alert-triangle', IconFeatherAlertTriangleElement)
