import { ICON_FEATHER_FACEBOOK } from '@aracna/icons-feather/assets/facebook'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-facebook': IconFeatherElement
  }
}

export class IconFeatherFacebookElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_FACEBOOK
  }
}

defineCustomElement('icon-feather-facebook', IconFeatherFacebookElement)
