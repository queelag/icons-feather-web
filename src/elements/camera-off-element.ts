import { ICON_FEATHER_CAMERA_OFF } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-camera-off': IconFeatherElement
  }
}

export class IconFeatherCameraOffElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CAMERA_OFF
  }
}

defineCustomElement('icon-feather-camera-off', IconFeatherCameraOffElement)
