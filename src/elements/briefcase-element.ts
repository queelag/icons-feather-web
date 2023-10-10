import { ICON_FEATHER_BRIEFCASE } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-briefcase': IconFeatherElement
  }
}

export class IconFeatherBriefcaseElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_BRIEFCASE
  }
}

defineCustomElement('icon-feather-briefcase', IconFeatherBriefcaseElement)
