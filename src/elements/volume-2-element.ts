import { ICON_F_VOLUME_2 } from '@aracna/icons-feather/assets/volume-2'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-volume-2': IconFeatherVolume2Element
  }
}

export class IconFeatherVolume2Element extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_VOLUME_2
  }
}

defineCustomElement('icon-feather-volume-2', IconFeatherVolume2Element)
