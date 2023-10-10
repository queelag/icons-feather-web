import { ICON_FEATHER_HEADPHONES } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-headphones': IconFeatherElement
  }
}

export class IconFeatherHeadphonesElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_HEADPHONES
  }
}

defineCustomElement('icon-feather-headphones', IconFeatherHeadphonesElement)
