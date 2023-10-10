import { ICON_FEATHER_LINKEDIN } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-linkedin': IconFeatherElement
  }
}

export class IconFeatherLinkedinElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_LINKEDIN
  }
}

defineCustomElement('icon-feather-linkedin', IconFeatherLinkedinElement)
