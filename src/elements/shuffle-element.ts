import { ICON_FEATHER_SHUFFLE } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-shuffle': IconFeatherElement
  }
}

export class IconFeatherShuffleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SHUFFLE
  }
}

defineCustomElement('icon-feather-shuffle', IconFeatherShuffleElement)
