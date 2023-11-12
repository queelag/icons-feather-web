import { ICON_F_IMAGE } from '@aracna/icons-feather/assets/image'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-image': IconFeatherImageElement
  }
}

export class IconFeatherImageElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_IMAGE
  }
}

defineCustomElement('icon-feather-image', IconFeatherImageElement)
