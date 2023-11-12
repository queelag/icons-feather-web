import { ICON_F_CHROME } from '@aracna/icons-feather/assets/chrome'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-chrome': IconFeatherChromeElement
  }
}

export class IconFeatherChromeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CHROME
  }
}

defineCustomElement('icon-feather-chrome', IconFeatherChromeElement)
