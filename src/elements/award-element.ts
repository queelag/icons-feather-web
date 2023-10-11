import { ICON_FEATHER_AWARD } from '@aracna/icons-feather/assets/award'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-award': IconFeatherElement
  }
}

export class IconFeatherAwardElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_AWARD
  }
}

defineCustomElement('icon-feather-award', IconFeatherAwardElement)
