import { ICON_FEATHER_VIDEO_OFF } from '@aracna/icons-feather/assets/video-off'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-video-off': IconFeatherVideoOffElement
  }
}

export class IconFeatherVideoOffElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_VIDEO_OFF
  }
}

defineCustomElement('icon-feather-video-off', IconFeatherVideoOffElement)
