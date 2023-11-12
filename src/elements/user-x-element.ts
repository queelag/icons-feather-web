import { ICON_F_USER_X } from '@aracna/icons-feather/assets/user-x'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-user-x': IconFeatherUserXElement
  }
}

export class IconFeatherUserXElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_USER_X
  }
}

defineCustomElement('icon-feather-user-x', IconFeatherUserXElement)
