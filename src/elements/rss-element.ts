import { ICON_FEATHER_RSS } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-rss': IconFeatherElement
  }
}

export class IconFeatherRssElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_RSS
  }
}

defineCustomElement('icon-feather-rss', IconFeatherRssElement)
