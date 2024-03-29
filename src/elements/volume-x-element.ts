import { ICON_F_VOLUME_X } from '@aracna/icons-feather/assets/volume-x'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-volume-x': IconFeatherVolumeXElement
  }
}

export class IconFeatherVolumeXElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_VOLUME_X
  }
}

defineCustomElement('icon-feather-volume-x', IconFeatherVolumeXElement)
