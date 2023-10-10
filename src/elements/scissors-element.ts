import { ICON_FEATHER_SCISSORS } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-scissors': IconFeatherElement
  }
}

export class IconFeatherScissorsElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SCISSORS
  }
}

defineCustomElement('icon-feather-scissors', IconFeatherScissorsElement)
