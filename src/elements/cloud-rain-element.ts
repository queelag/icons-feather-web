import { ICON_F_CLOUD_RAIN } from '@aracna/icons-feather/assets/cloud-rain'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-cloud-rain': IconFeatherCloudRainElement
  }
}

export class IconFeatherCloudRainElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CLOUD_RAIN
  }
}

defineCustomElement('icon-feather-cloud-rain', IconFeatherCloudRainElement)
