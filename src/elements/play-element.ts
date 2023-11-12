import { ICON_F_PLAY } from '@aracna/icons-feather/assets/play'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-play': IconFeatherPlayElement
  }
}

export class IconFeatherPlayElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_PLAY
  }
}

defineCustomElement('icon-feather-play', IconFeatherPlayElement)
