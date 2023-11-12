import { ICON_F_UMBRELLA } from '@aracna/icons-feather/assets/umbrella'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-umbrella': IconFeatherUmbrellaElement
  }
}

export class IconFeatherUmbrellaElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_UMBRELLA
  }
}

defineCustomElement('icon-feather-umbrella', IconFeatherUmbrellaElement)
