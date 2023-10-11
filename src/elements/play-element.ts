import { ICON_FEATHER_PLAY } from '@aracna/icons-feather/assets/play'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-play': IconFeatherElement
  }
}

export class IconFeatherPlayElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PLAY
  }
}

defineCustomElement('icon-feather-play', IconFeatherPlayElement)
