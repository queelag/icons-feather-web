import { ICON_FEATHER_USER_PLUS } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-user-plus': IconFeatherElement
  }
}

export class IconFeatherUserPlusElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_USER_PLUS
  }
}

defineCustomElement('icon-feather-user-plus', IconFeatherUserPlusElement)
