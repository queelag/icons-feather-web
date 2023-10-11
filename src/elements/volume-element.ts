import { ICON_FEATHER_VOLUME } from '@aracna/icons-feather/assets/volume'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-volume': IconFeatherElement
  }
}

export class IconFeatherVolumeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_VOLUME
  }
}

defineCustomElement('icon-feather-volume', IconFeatherVolumeElement)
