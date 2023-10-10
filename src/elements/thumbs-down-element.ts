import { ICON_FEATHER_THUMBS_DOWN } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-thumbs-down': IconFeatherElement
  }
}

export class IconFeatherThumbsDownElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_THUMBS_DOWN
  }
}

defineCustomElement('icon-feather-thumbs-down', IconFeatherThumbsDownElement)
