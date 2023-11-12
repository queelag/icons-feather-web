import { ICON_F_INFO } from '@aracna/icons-feather/assets/info'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-info': IconFeatherInfoElement
  }
}

export class IconFeatherInfoElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_INFO
  }
}

defineCustomElement('icon-feather-info', IconFeatherInfoElement)
