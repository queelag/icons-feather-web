import { ICON_FEATHER_FROWN } from '@aracna/icons-feather/assets/frown'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-frown': IconFeatherElement
  }
}

export class IconFeatherFrownElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_FROWN
  }
}

defineCustomElement('icon-feather-frown', IconFeatherFrownElement)
