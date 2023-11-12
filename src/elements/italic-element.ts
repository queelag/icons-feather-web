import { ICON_F_ITALIC } from '@aracna/icons-feather/assets/italic'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-italic': IconFeatherItalicElement
  }
}

export class IconFeatherItalicElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_ITALIC
  }
}

defineCustomElement('icon-feather-italic', IconFeatherItalicElement)
