import { ICON_FEATHER_TRASH } from '@aracna/icons-feather/assets/trash'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-trash': IconFeatherElement
  }
}

export class IconFeatherTrashElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_TRASH
  }
}

defineCustomElement('icon-feather-trash', IconFeatherTrashElement)
