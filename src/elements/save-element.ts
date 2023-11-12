import { ICON_F_SAVE } from '@aracna/icons-feather/assets/save'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-save': IconFeatherSaveElement
  }
}

export class IconFeatherSaveElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_SAVE
  }
}

defineCustomElement('icon-feather-save', IconFeatherSaveElement)
