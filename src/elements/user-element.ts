import { ICON_FEATHER_USER } from '@aracna/icons-feather/assets/user'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-user': IconFeatherElement
  }
}

export class IconFeatherUserElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_USER
  }
}

defineCustomElement('icon-feather-user', IconFeatherUserElement)
