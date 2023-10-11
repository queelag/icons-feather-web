import { ICON_FEATHER_APERTURE } from '@aracna/icons-feather/assets/aperture'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-aperture': IconFeatherApertureElement
  }
}

export class IconFeatherApertureElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_APERTURE
  }
}

defineCustomElement('icon-feather-aperture', IconFeatherApertureElement)
