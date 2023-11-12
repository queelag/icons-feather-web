import { ICON_F_CLOUD_OFF } from '@aracna/icons-feather/assets/cloud-off'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-cloud-off': IconFeatherCloudOffElement
  }
}

export class IconFeatherCloudOffElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CLOUD_OFF
  }
}

defineCustomElement('icon-feather-cloud-off', IconFeatherCloudOffElement)
