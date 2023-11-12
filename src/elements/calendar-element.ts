import { ICON_F_CALENDAR } from '@aracna/icons-feather/assets/calendar'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-calendar': IconFeatherCalendarElement
  }
}

export class IconFeatherCalendarElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_CALENDAR
  }
}

defineCustomElement('icon-feather-calendar', IconFeatherCalendarElement)
