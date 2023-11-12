import { ICON_F_VOICEMAIL } from '@aracna/icons-feather/assets/voicemail'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-voicemail': IconFeatherVoicemailElement
  }
}

export class IconFeatherVoicemailElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_VOICEMAIL
  }
}

defineCustomElement('icon-feather-voicemail', IconFeatherVoicemailElement)
