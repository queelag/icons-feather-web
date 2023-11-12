import { ICON_F_GIT_PULL_REQUEST } from '@aracna/icons-feather/assets/git-pull-request'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-git-pull-request': IconFeatherGitPullRequestElement
  }
}

export class IconFeatherGitPullRequestElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_F_GIT_PULL_REQUEST
  }
}

defineCustomElement('icon-feather-git-pull-request', IconFeatherGitPullRequestElement)
