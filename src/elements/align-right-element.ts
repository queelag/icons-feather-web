import { ICON_FEATHER_ALIGN_RIGHT } from '@aracna/icons-feather/assets/align-right'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-align-right': IconFeatherAlignRightElement
  }
}

export class IconFeatherAlignRightElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ALIGN_RIGHT
  }
}

defineCustomElement('icon-feather-align-right', IconFeatherAlignRightElement)
