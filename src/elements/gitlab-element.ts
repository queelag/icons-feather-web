import { ICON_FEATHER_GITLAB } from '@aracna/icons-feather/assets/gitlab'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-gitlab': IconFeatherGitlabElement
  }
}

export class IconFeatherGitlabElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_GITLAB
  }
}

defineCustomElement('icon-feather-gitlab', IconFeatherGitlabElement)
