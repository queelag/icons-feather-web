import { ICON_FEATHER_YOUTUBE } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-youtube': IconFeatherElement
  }
}

export class IconFeatherYoutubeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_YOUTUBE
  }
}

defineCustomElement('icon-feather-youtube', IconFeatherYoutubeElement)
