import { ICON_FEATHER_HELP_CIRCLE } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-help-circle': IconFeatherElement
  }
}

export class IconFeatherHelpCircleElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_HELP_CIRCLE
  }
}

defineCustomElement('icon-feather-help-circle', IconFeatherHelpCircleElement)
