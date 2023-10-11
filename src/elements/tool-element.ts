import { ICON_FEATHER_TOOL } from '@aracna/icons-feather/assets/tool'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-tool': IconFeatherElement
  }
}

export class IconFeatherToolElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_TOOL
  }
}

defineCustomElement('icon-feather-tool', IconFeatherToolElement)
