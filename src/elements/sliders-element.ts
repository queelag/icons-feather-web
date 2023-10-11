import { ICON_FEATHER_SLIDERS } from '@aracna/icons-feather/assets/sliders'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-sliders': IconFeatherElement
  }
}

export class IconFeatherSlidersElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SLIDERS
  }
}

defineCustomElement('icon-feather-sliders', IconFeatherSlidersElement)
