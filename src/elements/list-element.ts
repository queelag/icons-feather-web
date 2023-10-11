import { ICON_FEATHER_LIST } from '@aracna/icons-feather/assets/list'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-list': IconFeatherListElement
  }
}

export class IconFeatherListElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_LIST
  }
}

defineCustomElement('icon-feather-list', IconFeatherListElement)
