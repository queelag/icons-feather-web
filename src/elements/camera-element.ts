import { defineCustomElement } from '@aracna/web'
import { IconElement } from '@aracna/web-components/elements/data/icon-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-camera': IconElement
  }
}

export class IconFeatherCameraElement extends IconElement {
  constructor() {
    super()

    this.fill = 'none'
    this.size = 16
    this.src =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>'
    this.stroke = 'currentColor'
    this.strokeLineCap = 'round'
    this.strokeLineJoin = 'round'
    this.strokeWidth = '2'
  }
}

defineCustomElement('icon-feather-camera', IconFeatherCameraElement)
