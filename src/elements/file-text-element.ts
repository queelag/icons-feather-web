import { ICON_FEATHER_FILE_TEXT } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-file-text': IconFeatherElement
  }
}

export class IconFeatherFileTextElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_FILE_TEXT
  }
}

defineCustomElement('icon-feather-file-text', IconFeatherFileTextElement)
