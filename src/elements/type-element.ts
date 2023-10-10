import { ICON_FEATHER_TYPE } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-type': IconFeatherElement
  }
}

export class IconFeatherTypeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_TYPE
  }
}

defineCustomElement('icon-feather-type', IconFeatherTypeElement)
