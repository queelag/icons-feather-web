import { ICON_FEATHER_ALIGN_JUSTIFY } from '@aracna/icons-feather/assets/align-justify'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-align-justify': IconFeatherAlignJustifyElement
  }
}

export class IconFeatherAlignJustifyElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ALIGN_JUSTIFY
  }
}

defineCustomElement('icon-feather-align-justify', IconFeatherAlignJustifyElement)
