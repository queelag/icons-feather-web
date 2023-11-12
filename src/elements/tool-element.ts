import { ICON_F_TOOL } from '@aracna/icons-feather/assets/tool'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-tool': IconFeatherToolElement
  }
}

export class IconFeatherToolElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_TOOL
  }
}

defineCustomElement('icon-feather-tool', IconFeatherToolElement)
