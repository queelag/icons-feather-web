import { ICON_FEATHER_FEATHER } from '@aracna/icons-feather/assets/feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-feather': IconFeatherElement
  }
}

export class IconFeatherFeatherElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_FEATHER
  }
}

defineCustomElement('icon-feather-feather', IconFeatherFeatherElement)
