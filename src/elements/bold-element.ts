import { ICON_FEATHER_BOLD } from '@aracna/icons-feather/assets/bold'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-bold': IconFeatherBoldElement
  }
}

export class IconFeatherBoldElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_BOLD
  }
}

defineCustomElement('icon-feather-bold', IconFeatherBoldElement)
