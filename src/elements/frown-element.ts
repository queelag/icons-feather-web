import { ICON_F_FROWN } from '@aracna/icons-feather/assets/frown'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-frown': IconFeatherFrownElement
  }
}

export class IconFeatherFrownElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_FROWN
  }
}

defineCustomElement('icon-feather-frown', IconFeatherFrownElement)
