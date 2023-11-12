import { ICON_F_CLOUD_DRIZZLE } from '@aracna/icons-feather/assets/cloud-drizzle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-cloud-drizzle': IconFeatherCloudDrizzleElement
  }
}

export class IconFeatherCloudDrizzleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CLOUD_DRIZZLE
  }
}

defineCustomElement('icon-feather-cloud-drizzle', IconFeatherCloudDrizzleElement)
