import { ICON_FEATHER_VOICEMAIL } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-voicemail': IconFeatherElement
  }
}

export class IconFeatherVoicemailElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_VOICEMAIL
  }
}

defineCustomElement('icon-feather-voicemail', IconFeatherVoicemailElement)
