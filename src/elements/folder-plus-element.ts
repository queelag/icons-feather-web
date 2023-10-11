import { ICON_FEATHER_FOLDER_PLUS } from '@aracna/icons-feather/assets/folder-plus'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-folder-plus': IconFeatherFolderPlusElement
  }
}

export class IconFeatherFolderPlusElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_FOLDER_PLUS
  }
}

defineCustomElement('icon-feather-folder-plus', IconFeatherFolderPlusElement)
