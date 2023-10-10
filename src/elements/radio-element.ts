import { ICON_FEATHER_RADIO } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-radio': IconFeatherElement
  }
}

export class IconFeatherRadioElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_RADIO
  }
}

defineCustomElement('icon-feather-radio', IconFeatherRadioElement)
