import { ICON_FEATHER_GIT_COMMIT } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-git-commit': IconFeatherElement
  }
}

export class IconFeatherGitCommitElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_GIT_COMMIT
  }
}

defineCustomElement('icon-feather-git-commit', IconFeatherGitCommitElement)
