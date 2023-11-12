import { ICON_F_UNDERLINE } from '@aracna/icons-feather/assets/underline'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-underline': IconFeatherUnderlineElement
  }
}

export class IconFeatherUnderlineElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_UNDERLINE
  }
}

defineCustomElement('icon-feather-underline', IconFeatherUnderlineElement)
