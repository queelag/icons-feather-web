import { ICON_F_EYE } from '@aracna/icons-feather/assets/eye'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-eye': IconFeatherEyeElement
  }
}

export class IconFeatherEyeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_EYE
  }
}

defineCustomElement('icon-feather-eye', IconFeatherEyeElement)
