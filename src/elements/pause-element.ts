import { ICON_FEATHER_PAUSE } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-pause': IconFeatherElement
  }
}

export class IconFeatherPauseElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PAUSE
  }
}

defineCustomElement('icon-feather-pause', IconFeatherPauseElement)
