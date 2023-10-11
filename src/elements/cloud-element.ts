import { ICON_FEATHER_CLOUD } from '@aracna/icons-feather/assets/cloud'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-cloud': IconFeatherElement
  }
}

export class IconFeatherCloudElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CLOUD
  }
}

defineCustomElement('icon-feather-cloud', IconFeatherCloudElement)
