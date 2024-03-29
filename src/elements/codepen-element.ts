import { ICON_F_CODEPEN } from '@aracna/icons-feather/assets/codepen'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-codepen': IconFeatherCodepenElement
  }
}

export class IconFeatherCodepenElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CODEPEN
  }
}

defineCustomElement('icon-feather-codepen', IconFeatherCodepenElement)
