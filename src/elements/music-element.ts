import { ICON_F_MUSIC } from '@aracna/icons-feather/assets/music'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-music': IconFeatherMusicElement
  }
}

export class IconFeatherMusicElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_MUSIC
  }
}

defineCustomElement('icon-feather-music', IconFeatherMusicElement)
