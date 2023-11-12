import { ICON_F_DELETE } from '@aracna/icons-feather/assets/delete'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-delete': IconFeatherDeleteElement
  }
}

export class IconFeatherDeleteElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_DELETE
  }
}

defineCustomElement('icon-feather-delete', IconFeatherDeleteElement)
