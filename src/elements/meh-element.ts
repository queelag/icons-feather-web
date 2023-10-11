import { ICON_FEATHER_MEH } from '@aracna/icons-feather/assets/meh'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-meh': IconFeatherMehElement
  }
}

export class IconFeatherMehElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_MEH
  }
}

defineCustomElement('icon-feather-meh', IconFeatherMehElement)
