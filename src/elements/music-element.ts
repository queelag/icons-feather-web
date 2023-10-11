import { ICON_FEATHER_MUSIC } from '@aracna/icons-feather/assets/music'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-music': IconFeatherElement
  }
}

export class IconFeatherMusicElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_MUSIC
  }
}

defineCustomElement('icon-feather-music', IconFeatherMusicElement)
