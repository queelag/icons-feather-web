import { ICON_FEATHER_CPU } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-cpu': IconFeatherElement
  }
}

export class IconFeatherCpuElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_CPU
  }
}

defineCustomElement('icon-feather-cpu', IconFeatherCpuElement)
