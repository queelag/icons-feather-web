import { ICON_F_BLUETOOTH } from '@aracna/icons-feather/assets/bluetooth'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-bluetooth': IconFeatherBluetoothElement
  }
}

export class IconFeatherBluetoothElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_BLUETOOTH
  }
}

defineCustomElement('icon-feather-bluetooth', IconFeatherBluetoothElement)
