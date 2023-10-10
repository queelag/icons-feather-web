import { ICON_FEATHER_COPY } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-copy': IconFeatherElement
  }
}

export class IconFeatherCopyElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_COPY
  }
}

defineCustomElement('icon-feather-copy', IconFeatherCopyElement)
