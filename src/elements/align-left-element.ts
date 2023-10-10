import { ICON_FEATHER_ALIGN_LEFT } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-align-left': IconFeatherElement
  }
}

export class IconFeatherAlignLeftElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ALIGN_LEFT
  }
}

defineCustomElement('icon-feather-align-left', IconFeatherAlignLeftElement)
