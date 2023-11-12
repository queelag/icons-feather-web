import { ICON_F_GITHUB } from '@aracna/icons-feather/assets/github'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-github': IconFeatherGithubElement
  }
}

export class IconFeatherGithubElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_GITHUB
  }
}

defineCustomElement('icon-feather-github', IconFeatherGithubElement)
