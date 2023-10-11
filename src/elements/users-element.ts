import { ICON_FEATHER_USERS } from '@aracna/icons-feather/assets/users'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-users': IconFeatherUsersElement
  }
}

export class IconFeatherUsersElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_USERS
  }
}

defineCustomElement('icon-feather-users', IconFeatherUsersElement)
