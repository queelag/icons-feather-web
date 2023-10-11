import { ICON_FEATHER_DELETE } from '@aracna/icons-feather/assets/delete'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-delete': IconFeatherElement
  }
}

export class IconFeatherDeleteElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_DELETE
  }
}

defineCustomElement('icon-feather-delete', IconFeatherDeleteElement)
