import { ICON_FEATHER_TARGET } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-target': IconFeatherElement
  }
}

export class IconFeatherTargetElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_TARGET
  }
}

defineCustomElement('icon-feather-target', IconFeatherTargetElement)
