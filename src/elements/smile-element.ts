import { ICON_FEATHER_SMILE } from '@aracna/icons-feather/assets/smile'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-smile': IconFeatherSmileElement
  }
}

export class IconFeatherSmileElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SMILE
  }
}

defineCustomElement('icon-feather-smile', IconFeatherSmileElement)
