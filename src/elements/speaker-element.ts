import { ICON_FEATHER_SPEAKER } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-speaker': IconFeatherElement
  }
}

export class IconFeatherSpeakerElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_SPEAKER
  }
}

defineCustomElement('icon-feather-speaker', IconFeatherSpeakerElement)
