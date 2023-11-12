import { ICON_F_PAPERCLIP } from '@aracna/icons-feather/assets/paperclip'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-paperclip': IconFeatherPaperclipElement
  }
}

export class IconFeatherPaperclipElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_PAPERCLIP
  }
}

defineCustomElement('icon-feather-paperclip', IconFeatherPaperclipElement)
