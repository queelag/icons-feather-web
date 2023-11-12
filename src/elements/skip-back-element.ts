import { ICON_F_SKIP_BACK } from '@aracna/icons-feather/assets/skip-back'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-skip-back': IconFeatherSkipBackElement
  }
}

export class IconFeatherSkipBackElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_SKIP_BACK
  }
}

defineCustomElement('icon-feather-skip-back', IconFeatherSkipBackElement)
