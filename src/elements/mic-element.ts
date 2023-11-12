import { ICON_F_MIC } from '@aracna/icons-feather/assets/mic'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-mic': IconFeatherMicElement
  }
}

export class IconFeatherMicElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_MIC
  }
}

defineCustomElement('icon-feather-mic', IconFeatherMicElement)
