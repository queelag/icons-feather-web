import { ICON_FEATHER_SKIP_FORWARD } from '@aracna/icons-feather/assets/skip-forward'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-skip-forward': IconFeatherSkipForwardElement
  }
}

export class IconFeatherSkipForwardElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SKIP_FORWARD
  }
}

defineCustomElement('icon-feather-skip-forward', IconFeatherSkipForwardElement)
