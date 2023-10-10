import { ICON_FEATHER_SMILE } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-smile': IconFeatherElement
  }
}

export class IconFeatherSmileElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SMILE
  }
}

defineCustomElement('icon-feather-smile', IconFeatherSmileElement)
