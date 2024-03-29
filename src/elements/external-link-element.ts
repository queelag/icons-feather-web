import { ICON_F_EXTERNAL_LINK } from '@aracna/icons-feather/assets/external-link'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-external-link': IconFeatherExternalLinkElement
  }
}

export class IconFeatherExternalLinkElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_EXTERNAL_LINK
  }
}

defineCustomElement('icon-feather-external-link', IconFeatherExternalLinkElement)
