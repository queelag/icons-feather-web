import { ICON_FEATHER_CROP } from '@aracna/icons-feather/assets/crop'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-crop': IconFeatherCropElement
  }
}

export class IconFeatherCropElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CROP
  }
}

defineCustomElement('icon-feather-crop', IconFeatherCropElement)
