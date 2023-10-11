import { ICON_FEATHER_PACKAGE } from '@aracna/icons-feather/assets/package'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-package': IconFeatherElement
  }
}

export class IconFeatherPackageElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_PACKAGE
  }
}

defineCustomElement('icon-feather-package', IconFeatherPackageElement)
