import { ICON_FEATHER_MIC } from '@aracna/icons-feather/assets/mic'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-mic': IconFeatherElement
  }
}

export class IconFeatherMicElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_MIC
  }
}

defineCustomElement('icon-feather-mic', IconFeatherMicElement)
