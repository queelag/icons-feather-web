import { ICON_F_BRIEFCASE } from '@aracna/icons-feather/assets/briefcase'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-briefcase': IconFeatherBriefcaseElement
  }
}

export class IconFeatherBriefcaseElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_BRIEFCASE
  }
}

defineCustomElement('icon-feather-briefcase', IconFeatherBriefcaseElement)
