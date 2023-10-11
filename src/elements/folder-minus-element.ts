import { ICON_FEATHER_FOLDER_MINUS } from '@aracna/icons-feather/assets/folder-minus'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-folder-minus': IconFeatherFolderMinusElement
  }
}

export class IconFeatherFolderMinusElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_FOLDER_MINUS
  }
}

defineCustomElement('icon-feather-folder-minus', IconFeatherFolderMinusElement)
