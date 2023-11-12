import { ICON_F_ACTIVITY } from '@aracna/icons-feather/assets/activity'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-activity': IconFeatherActivityElement
  }
}

export class IconFeatherActivityElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_ACTIVITY
  }
}

defineCustomElement('icon-feather-activity', IconFeatherActivityElement)
