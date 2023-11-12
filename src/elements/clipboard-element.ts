import { ICON_F_CLIPBOARD } from '@aracna/icons-feather/assets/clipboard'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-clipboard': IconFeatherClipboardElement
  }
}

export class IconFeatherClipboardElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CLIPBOARD
  }
}

defineCustomElement('icon-feather-clipboard', IconFeatherClipboardElement)
