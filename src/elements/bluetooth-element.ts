import { ICON_FEATHER_BLUETOOTH } from '@aracna/icons-feather/assets/bluetooth'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-bluetooth': IconFeatherElement
  }
}

export class IconFeatherBluetoothElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_BLUETOOTH
  }
}

defineCustomElement('icon-feather-bluetooth', IconFeatherBluetoothElement)
