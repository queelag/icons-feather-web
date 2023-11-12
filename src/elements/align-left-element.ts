import { ICON_F_ALIGN_LEFT } from '@aracna/icons-feather/assets/align-left'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-align-left': IconFeatherAlignLeftElement
  }
}

export class IconFeatherAlignLeftElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_ALIGN_LEFT
  }
}

defineCustomElement('icon-feather-align-left', IconFeatherAlignLeftElement)
