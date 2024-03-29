import { ICON_F_CLOUD } from '@aracna/icons-feather/assets/cloud'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-cloud': IconFeatherCloudElement
  }
}

export class IconFeatherCloudElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CLOUD
  }
}

defineCustomElement('icon-feather-cloud', IconFeatherCloudElement)
