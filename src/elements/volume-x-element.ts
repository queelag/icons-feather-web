import { ICON_FEATHER_VOLUME_X } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-volume-x': IconFeatherElement
  }
}

export class IconFeatherVolumeXElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_VOLUME_X
  }
}

defineCustomElement('icon-feather-volume-x', IconFeatherVolumeXElement)
