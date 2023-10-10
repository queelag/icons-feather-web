import { ICON_FEATHER_VOLUME_1 } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-volume-1': IconFeatherElement
  }
}

export class IconFeatherVolume1Element extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_VOLUME_1
  }
}

defineCustomElement('icon-feather-volume-1', IconFeatherVolume1Element)
