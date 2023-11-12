import { ICON_F_DROPLET } from '@aracna/icons-feather/assets/droplet'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-droplet': IconFeatherDropletElement
  }
}

export class IconFeatherDropletElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_DROPLET
  }
}

defineCustomElement('icon-feather-droplet', IconFeatherDropletElement)
