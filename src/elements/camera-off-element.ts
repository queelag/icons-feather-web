import { ICON_F_CAMERA_OFF } from '@aracna/icons-feather/assets/camera-off'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-camera-off': IconFeatherCameraOffElement
  }
}

export class IconFeatherCameraOffElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CAMERA_OFF
  }
}

defineCustomElement('icon-feather-camera-off', IconFeatherCameraOffElement)
