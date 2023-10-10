import { ICON_FEATHER_GIT_BRANCH } from '@aracna/icons-feather'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-git-branch': IconFeatherElement
  }
}

export class IconFeatherGitBranchElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_GIT_BRANCH
  }
}

defineCustomElement('icon-feather-git-branch', IconFeatherGitBranchElement)
