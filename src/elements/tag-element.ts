import { ICON_F_TAG } from '@aracna/icons-feather/assets/tag'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-tag': IconFeatherTagElement
  }
}

export class IconFeatherTagElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_TAG
  }
}

defineCustomElement('icon-feather-tag', IconFeatherTagElement)
