import { ICON_FEATHER_FILE_MINUS } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-file-minus': IconFeatherElement
  }
}

export class IconFeatherFileMinusElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_FILE_MINUS
  }
}

defineCustomElement('icon-feather-file-minus', IconFeatherFileMinusElement)
