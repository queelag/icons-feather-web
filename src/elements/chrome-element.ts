import { ICON_FEATHER_CHROME } from '@aracna/icons-feather/assets/chrome'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-chrome': IconFeatherElement
  }
}

export class IconFeatherChromeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CHROME
  }
}

defineCustomElement('icon-feather-chrome', IconFeatherChromeElement)
