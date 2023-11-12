import { ICON_F_RSS } from '@aracna/icons-feather/assets/rss'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-rss': IconFeatherRssElement
  }
}

export class IconFeatherRssElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_RSS
  }
}

defineCustomElement('icon-feather-rss', IconFeatherRssElement)
