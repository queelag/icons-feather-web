import { ICON_F_HOME } from '@aracna/icons-feather/assets/home'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-home': IconFeatherHomeElement
  }
}

export class IconFeatherHomeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_HOME
  }
}

defineCustomElement('icon-feather-home', IconFeatherHomeElement)
