import { ICON_F_ARCHIVE } from '@aracna/icons-feather/assets/archive'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-archive': IconFeatherArchiveElement
  }
}

export class IconFeatherArchiveElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_ARCHIVE
  }
}

defineCustomElement('icon-feather-archive', IconFeatherArchiveElement)
