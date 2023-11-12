import { ICON_F_ZOOM_OUT } from '@aracna/icons-feather/assets/zoom-out'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-zoom-out': IconFeatherZoomOutElement
  }
}

export class IconFeatherZoomOutElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_ZOOM_OUT
  }
}

defineCustomElement('icon-feather-zoom-out', IconFeatherZoomOutElement)
