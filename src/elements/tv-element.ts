import { ICON_F_TV } from '@aracna/icons-feather/assets/tv'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-tv': IconFeatherTvElement
  }
}

export class IconFeatherTvElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_TV
  }
}

defineCustomElement('icon-feather-tv', IconFeatherTvElement)
