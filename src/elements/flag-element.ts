import { ICON_F_FLAG } from '@aracna/icons-feather/assets/flag'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-flag': IconFeatherFlagElement
  }
}

export class IconFeatherFlagElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_FLAG
  }
}

defineCustomElement('icon-feather-flag', IconFeatherFlagElement)
