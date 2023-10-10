import { ICON_FEATHER_CHECK } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-check': IconFeatherElement
  }
}

export class IconFeatherCheckElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CHECK
  }
}

defineCustomElement('icon-feather-check', IconFeatherCheckElement)
