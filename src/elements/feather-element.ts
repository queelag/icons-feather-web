import { ICON_F_FEATHER } from '@aracna/icons-feather/assets/feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-feather': IconFeatherFeatherElement
  }
}

export class IconFeatherFeatherElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_FEATHER
  }
}

defineCustomElement('icon-feather-feather', IconFeatherFeatherElement)
