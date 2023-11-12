import { ICON_F_TWITCH } from '@aracna/icons-feather/assets/twitch'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-twitch': IconFeatherTwitchElement
  }
}

export class IconFeatherTwitchElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_TWITCH
  }
}

defineCustomElement('icon-feather-twitch', IconFeatherTwitchElement)
