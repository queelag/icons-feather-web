import { ICON_F_SETTINGS } from '@aracna/icons-feather/assets/settings'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-settings': IconFeatherSettingsElement
  }
}

export class IconFeatherSettingsElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_SETTINGS
  }
}

defineCustomElement('icon-feather-settings', IconFeatherSettingsElement)
