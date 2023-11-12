import { ICON_F_CODE } from '@aracna/icons-feather/assets/code'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-code': IconFeatherCodeElement
  }
}

export class IconFeatherCodeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CODE
  }
}

defineCustomElement('icon-feather-code', IconFeatherCodeElement)
