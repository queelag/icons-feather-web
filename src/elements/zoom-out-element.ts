import { ICON_FEATHER_ZOOM_OUT } from '@aracna/icons-feather/assets/zoom-out'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-zoom-out': IconFeatherElement
  }
}

export class IconFeatherZoomOutElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ZOOM_OUT
  }
}

defineCustomElement('icon-feather-zoom-out', IconFeatherZoomOutElement)
