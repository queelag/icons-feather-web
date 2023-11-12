import { ICON_F_GIT_COMMIT } from '@aracna/icons-feather/assets/git-commit'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-git-commit': IconFeatherGitCommitElement
  }
}

export class IconFeatherGitCommitElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_GIT_COMMIT
  }
}

defineCustomElement('icon-feather-git-commit', IconFeatherGitCommitElement)
