import { ICON_FEATHER_THUMBS_UP } from '@aracna/icons-feather/assets/thumbs-up'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-thumbs-up': IconFeatherElement
  }
}

export class IconFeatherThumbsUpElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_THUMBS_UP
  }
}

defineCustomElement('icon-feather-thumbs-up', IconFeatherThumbsUpElement)
