import { ICON_FEATHER_STAR } from '@aracna/icons-feather/assets/star'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-star': IconFeatherElement
  }
}

export class IconFeatherStarElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_STAR
  }
}

defineCustomElement('icon-feather-star', IconFeatherStarElement)
