import { ICON_F_SHUFFLE } from '@aracna/icons-feather/assets/shuffle'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-shuffle': IconFeatherShuffleElement
  }
}

export class IconFeatherShuffleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_SHUFFLE
  }
}

defineCustomElement('icon-feather-shuffle', IconFeatherShuffleElement)
