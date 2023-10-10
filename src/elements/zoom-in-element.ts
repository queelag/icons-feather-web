import { ICON_FEATHER_ZOOM_IN } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-zoom-in': IconFeatherElement
  }
}

export class IconFeatherZoomInElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ZOOM_IN
  }
}

defineCustomElement('icon-feather-zoom-in', IconFeatherZoomInElement)
