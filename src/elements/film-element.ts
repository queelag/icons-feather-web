import { ICON_FEATHER_FILM } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-film': IconFeatherElement
  }
}

export class IconFeatherFilmElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_FILM
  }
}

defineCustomElement('icon-feather-film', IconFeatherFilmElement)
