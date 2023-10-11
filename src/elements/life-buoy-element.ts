import { ICON_FEATHER_LIFE_BUOY } from '@aracna/icons-feather/assets/life-buoy'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-life-buoy': IconFeatherElement
  }
}

export class IconFeatherLifeBuoyElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_LIFE_BUOY
  }
}

defineCustomElement('icon-feather-life-buoy', IconFeatherLifeBuoyElement)
