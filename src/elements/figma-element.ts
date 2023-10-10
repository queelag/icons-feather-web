import { ICON_FEATHER_FIGMA } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-figma': IconFeatherElement
  }
}

export class IconFeatherFigmaElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_FIGMA
  }
}

defineCustomElement('icon-feather-figma', IconFeatherFigmaElement)
