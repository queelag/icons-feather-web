import { ICON_F_ZOOM_IN } from '@aracna/icons-feather/assets/zoom-in'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-zoom-in': IconFeatherZoomInElement
  }
}

export class IconFeatherZoomInElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_ZOOM_IN
  }
}

defineCustomElement('icon-feather-zoom-in', IconFeatherZoomInElement)
