import { ICON_FEATHER_EDIT } from '@aracna/icons-feather/assets/edit'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-edit': IconFeatherElement
  }
}

export class IconFeatherEditElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_EDIT
  }
}

defineCustomElement('icon-feather-edit', IconFeatherEditElement)
