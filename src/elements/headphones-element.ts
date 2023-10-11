import { ICON_FEATHER_HEADPHONES } from '@aracna/icons-feather/assets/headphones'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-headphones': IconFeatherHeadphonesElement
  }
}

export class IconFeatherHeadphonesElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_HEADPHONES
  }
}

defineCustomElement('icon-feather-headphones', IconFeatherHeadphonesElement)
