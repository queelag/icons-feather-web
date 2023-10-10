import { ICON_FEATHER_LIST } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-list': IconFeatherElement
  }
}

export class IconFeatherListElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_LIST
  }
}

defineCustomElement('icon-feather-list', IconFeatherListElement)
