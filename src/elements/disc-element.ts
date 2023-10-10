import { ICON_FEATHER_DISC } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-disc': IconFeatherElement
  }
}

export class IconFeatherDiscElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_DISC
  }
}

defineCustomElement('icon-feather-disc', IconFeatherDiscElement)
