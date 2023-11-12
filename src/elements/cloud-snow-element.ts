import { ICON_F_CLOUD_SNOW } from '@aracna/icons-feather/assets/cloud-snow'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-cloud-snow': IconFeatherCloudSnowElement
  }
}

export class IconFeatherCloudSnowElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CLOUD_SNOW
  }
}

defineCustomElement('icon-feather-cloud-snow', IconFeatherCloudSnowElement)
