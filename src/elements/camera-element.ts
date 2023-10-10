import { ICON_FEATHER_CAMERA } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-camera': IconFeatherElement
  }
}

export class IconFeatherCameraElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CAMERA
  }
}

defineCustomElement('icon-feather-camera', IconFeatherCameraElement)
