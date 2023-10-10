import { ICON_FEATHER_USERS } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-users': IconFeatherElement
  }
}

export class IconFeatherUsersElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_USERS
  }
}

defineCustomElement('icon-feather-users', IconFeatherUsersElement)
