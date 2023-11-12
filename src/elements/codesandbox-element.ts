import { ICON_F_CODESANDBOX } from '@aracna/icons-feather/assets/codesandbox'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-codesandbox': IconFeatherCodesandboxElement
  }
}

export class IconFeatherCodesandboxElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CODESANDBOX
  }
}

defineCustomElement('icon-feather-codesandbox', IconFeatherCodesandboxElement)
