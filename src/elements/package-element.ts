import { ICON_F_PACKAGE } from '@aracna/icons-feather/assets/package'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-package': IconFeatherPackageElement
  }
}

export class IconFeatherPackageElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_PACKAGE
  }
}

defineCustomElement('icon-feather-package', IconFeatherPackageElement)
