import { ICON_F_MONITOR } from '@aracna/icons-feather/assets/monitor'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-monitor': IconFeatherMonitorElement
  }
}

export class IconFeatherMonitorElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_MONITOR
  }
}

defineCustomElement('icon-feather-monitor', IconFeatherMonitorElement)
