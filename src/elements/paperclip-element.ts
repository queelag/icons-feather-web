import { ICON_FEATHER_PAPERCLIP } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-paperclip': IconFeatherElement
  }
}

export class IconFeatherPaperclipElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PAPERCLIP
  }
}

defineCustomElement('icon-feather-paperclip', IconFeatherPaperclipElement)
