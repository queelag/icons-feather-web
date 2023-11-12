import { ICON_F_CLOUD_LIGHTNING } from '@aracna/icons-feather/assets/cloud-lightning'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-cloud-lightning': IconFeatherCloudLightningElement
  }
}

export class IconFeatherCloudLightningElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CLOUD_LIGHTNING
  }
}

defineCustomElement('icon-feather-cloud-lightning', IconFeatherCloudLightningElement)
