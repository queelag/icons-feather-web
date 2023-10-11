import { ICON_FEATHER_GITHUB } from '@aracna/icons-feather/assets/github'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-github': IconFeatherElement
  }
}

export class IconFeatherGithubElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_GITHUB
  }
}

defineCustomElement('icon-feather-github', IconFeatherGithubElement)
