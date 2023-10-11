import { ICON_FEATHER_INFO } from '@aracna/icons-feather/assets/info'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-info': IconFeatherElement
  }
}

export class IconFeatherInfoElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_INFO
  }
}

defineCustomElement('icon-feather-info', IconFeatherInfoElement)
