import { ICON_FEATHER_SHARE } from '@aracna/icons-feather/assets/share'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-share': IconFeatherElement
  }
}

export class IconFeatherShareElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SHARE
  }
}

defineCustomElement('icon-feather-share', IconFeatherShareElement)
