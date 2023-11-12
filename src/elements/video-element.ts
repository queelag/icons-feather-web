import { ICON_F_VIDEO } from '@aracna/icons-feather/assets/video'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-video': IconFeatherVideoElement
  }
}

export class IconFeatherVideoElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_VIDEO
  }
}

defineCustomElement('icon-feather-video', IconFeatherVideoElement)
