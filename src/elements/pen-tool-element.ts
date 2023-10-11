import { ICON_FEATHER_PEN_TOOL } from '@aracna/icons-feather/assets/pen-tool'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-pen-tool': IconFeatherPenToolElement
  }
}

export class IconFeatherPenToolElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PEN_TOOL
  }
}

defineCustomElement('icon-feather-pen-tool', IconFeatherPenToolElement)
