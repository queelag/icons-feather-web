import { ICON_F_TRASH } from '@aracna/icons-feather/assets/trash'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-trash': IconFeatherTrashElement
  }
}

export class IconFeatherTrashElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_TRASH
  }
}

defineCustomElement('icon-feather-trash', IconFeatherTrashElement)
