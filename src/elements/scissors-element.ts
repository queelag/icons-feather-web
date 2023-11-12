import { ICON_F_SCISSORS } from '@aracna/icons-feather/assets/scissors'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-scissors': IconFeatherScissorsElement
  }
}

export class IconFeatherScissorsElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_SCISSORS
  }
}

defineCustomElement('icon-feather-scissors', IconFeatherScissorsElement)
