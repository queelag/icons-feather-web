import { ICON_F_TARGET } from '@aracna/icons-feather/assets/target'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-target': IconFeatherTargetElement
  }
}

export class IconFeatherTargetElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_TARGET
  }
}

defineCustomElement('icon-feather-target', IconFeatherTargetElement)
