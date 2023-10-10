import { ICON_FEATHER_MOUSE_POINTER } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-mouse-pointer': IconFeatherElement
  }
}

export class IconFeatherMousePointerElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_MOUSE_POINTER
  }
}

defineCustomElement('icon-feather-mouse-pointer', IconFeatherMousePointerElement)
