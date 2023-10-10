import { ICON_FEATHER_DRIBBBLE } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-dribbble': IconFeatherElement
  }
}

export class IconFeatherDribbbleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_DRIBBBLE
  }
}

defineCustomElement('icon-feather-dribbble', IconFeatherDribbbleElement)
