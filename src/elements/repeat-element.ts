import { ICON_FEATHER_REPEAT } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-repeat': IconFeatherElement
  }
}

export class IconFeatherRepeatElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_REPEAT
  }
}

defineCustomElement('icon-feather-repeat', IconFeatherRepeatElement)
