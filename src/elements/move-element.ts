import { ICON_F_MOVE } from '@aracna/icons-feather/assets/move'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-move': IconFeatherMoveElement
  }
}

export class IconFeatherMoveElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_MOVE
  }
}

defineCustomElement('icon-feather-move', IconFeatherMoveElement)
