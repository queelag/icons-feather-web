import { ICON_FEATHER_HOME } from '@aracna/icons-feather/assets/home'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-home': IconFeatherElement
  }
}

export class IconFeatherHomeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_HOME
  }
}

defineCustomElement('icon-feather-home', IconFeatherHomeElement)
