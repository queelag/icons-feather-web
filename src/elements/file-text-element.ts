import { ICON_F_FILE_TEXT } from '@aracna/icons-feather/assets/file-text'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-file-text': IconFeatherFileTextElement
  }
}

export class IconFeatherFileTextElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_FILE_TEXT
  }
}

defineCustomElement('icon-feather-file-text', IconFeatherFileTextElement)
