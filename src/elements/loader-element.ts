import { ICON_F_LOADER } from '@aracna/icons-feather/assets/loader'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-loader': IconFeatherLoaderElement
  }
}

export class IconFeatherLoaderElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_LOADER
  }
}

defineCustomElement('icon-feather-loader', IconFeatherLoaderElement)
