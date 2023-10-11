import { ICON_FEATHER_USER_MINUS } from '@aracna/icons-feather/assets/user-minus'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-user-minus': IconFeatherUserMinusElement
  }
}

export class IconFeatherUserMinusElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_USER_MINUS
  }
}

defineCustomElement('icon-feather-user-minus', IconFeatherUserMinusElement)
