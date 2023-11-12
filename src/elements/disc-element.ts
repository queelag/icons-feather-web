import { ICON_F_DISC } from '@aracna/icons-feather/assets/disc'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-disc': IconFeatherDiscElement
  }
}

export class IconFeatherDiscElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_DISC
  }
}

defineCustomElement('icon-feather-disc', IconFeatherDiscElement)
