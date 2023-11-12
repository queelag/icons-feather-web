import { ICON_F_USER } from '@aracna/icons-feather/assets/user'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-user': IconFeatherUserElement
  }
}

export class IconFeatherUserElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_USER
  }
}

defineCustomElement('icon-feather-user', IconFeatherUserElement)
