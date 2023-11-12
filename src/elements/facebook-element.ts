import { ICON_F_FACEBOOK } from '@aracna/icons-feather/assets/facebook'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-facebook': IconFeatherFacebookElement
  }
}

export class IconFeatherFacebookElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_FACEBOOK
  }
}

defineCustomElement('icon-feather-facebook', IconFeatherFacebookElement)
