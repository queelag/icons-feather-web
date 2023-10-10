import { ICON_FEATHER_FOLDER } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-folder': IconFeatherElement
  }
}

export class IconFeatherFolderElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_FOLDER
  }
}

defineCustomElement('icon-feather-folder', IconFeatherFolderElement)
