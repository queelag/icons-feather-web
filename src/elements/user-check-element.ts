import { ICON_F_USER_CHECK } from '@aracna/icons-feather/assets/user-check'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-user-check': IconFeatherUserCheckElement
  }
}

export class IconFeatherUserCheckElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_USER_CHECK
  }
}

defineCustomElement('icon-feather-user-check', IconFeatherUserCheckElement)
