import { ICON_FEATHER_WATCH } from '@aracna/icons-feather/assets/watch'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-watch': IconFeatherWatchElement
  }
}

export class IconFeatherWatchElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_WATCH
  }
}

defineCustomElement('icon-feather-watch', IconFeatherWatchElement)
