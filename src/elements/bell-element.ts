import { ICON_FEATHER_BELL } from '@aracna/icons-feather/assets/bell'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-bell': IconFeatherElement
  }
}

export class IconFeatherBellElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_BELL
  }
}

defineCustomElement('icon-feather-bell', IconFeatherBellElement)
