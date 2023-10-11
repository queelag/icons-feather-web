import { ICON_FEATHER_ARCHIVE } from '@aracna/icons-feather/assets/archive'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-archive': IconFeatherElement
  }
}

export class IconFeatherArchiveElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_ARCHIVE
  }
}

defineCustomElement('icon-feather-archive', IconFeatherArchiveElement)
