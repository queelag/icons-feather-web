import { ICON_F_VOLUME } from '@aracna/icons-feather/assets/volume'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-volume': IconFeatherVolumeElement
  }
}

export class IconFeatherVolumeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_VOLUME
  }
}

defineCustomElement('icon-feather-volume', IconFeatherVolumeElement)
