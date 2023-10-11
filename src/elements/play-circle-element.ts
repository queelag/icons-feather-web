import { ICON_FEATHER_PLAY_CIRCLE } from '@aracna/icons-feather/assets/play-circle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-play-circle': IconFeatherElement
  }
}

export class IconFeatherPlayCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PLAY_CIRCLE
  }
}

defineCustomElement('icon-feather-play-circle', IconFeatherPlayCircleElement)
