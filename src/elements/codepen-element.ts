import { ICON_FEATHER_CODEPEN } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-codepen': IconFeatherElement
  }
}

export class IconFeatherCodepenElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CODEPEN
  }
}

defineCustomElement('icon-feather-codepen', IconFeatherCodepenElement)
