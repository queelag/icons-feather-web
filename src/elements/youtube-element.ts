import { ICON_FEATHER_YOUTUBE } from '@aracna/icons-feather/assets/youtube'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-youtube': IconFeatherYoutubeElement
  }
}

export class IconFeatherYoutubeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_YOUTUBE
  }
}

defineCustomElement('icon-feather-youtube', IconFeatherYoutubeElement)
