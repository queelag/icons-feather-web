import { ICON_F_MIC_OFF } from '@aracna/icons-feather/assets/mic-off'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-mic-off': IconFeatherMicOffElement
  }
}

export class IconFeatherMicOffElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_MIC_OFF
  }
}

defineCustomElement('icon-feather-mic-off', IconFeatherMicOffElement)
