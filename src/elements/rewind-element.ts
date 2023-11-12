import { ICON_F_REWIND } from '@aracna/icons-feather/assets/rewind'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-rewind': IconFeatherRewindElement
  }
}

export class IconFeatherRewindElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_REWIND
  }
}

defineCustomElement('icon-feather-rewind', IconFeatherRewindElement)
