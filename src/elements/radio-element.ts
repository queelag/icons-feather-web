import { ICON_F_RADIO } from '@aracna/icons-feather/assets/radio'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-radio': IconFeatherRadioElement
  }
}

export class IconFeatherRadioElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_RADIO
  }
}

defineCustomElement('icon-feather-radio', IconFeatherRadioElement)
