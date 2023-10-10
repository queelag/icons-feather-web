import { ICON_FEATHER_ALIGN_CENTER } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-align-center': IconFeatherElement
  }
}

export class IconFeatherAlignCenterElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ALIGN_CENTER
  }
}

defineCustomElement('icon-feather-align-center', IconFeatherAlignCenterElement)
