import { ICON_FEATHER_CODE } from '@aracna/icons-feather/assets/code'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-code': IconFeatherElement
  }
}

export class IconFeatherCodeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CODE
  }
}

defineCustomElement('icon-feather-code', IconFeatherCodeElement)
