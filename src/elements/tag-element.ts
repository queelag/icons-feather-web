import { ICON_FEATHER_TAG } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-tag': IconFeatherElement
  }
}

export class IconFeatherTagElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_TAG
  }
}

defineCustomElement('icon-feather-tag', IconFeatherTagElement)
