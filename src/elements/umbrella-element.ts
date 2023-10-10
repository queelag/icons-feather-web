import { ICON_FEATHER_UMBRELLA } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-umbrella': IconFeatherElement
  }
}

export class IconFeatherUmbrellaElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_UMBRELLA
  }
}

defineCustomElement('icon-feather-umbrella', IconFeatherUmbrellaElement)
