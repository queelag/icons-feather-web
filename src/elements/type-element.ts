import { ICON_F_TYPE } from '@aracna/icons-feather/assets/type'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-type': IconFeatherTypeElement
  }
}

export class IconFeatherTypeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_TYPE
  }
}

defineCustomElement('icon-feather-type', IconFeatherTypeElement)
