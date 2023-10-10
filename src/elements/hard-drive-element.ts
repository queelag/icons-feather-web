import { ICON_FEATHER_HARD_DRIVE } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-hard-drive': IconFeatherElement
  }
}

export class IconFeatherHardDriveElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_HARD_DRIVE
  }
}

defineCustomElement('icon-feather-hard-drive', IconFeatherHardDriveElement)
