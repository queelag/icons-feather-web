import { ICON_FEATHER_GIT_MERGE } from '@aracna/icons-feather/assets/git-merge'
import { defineCustomElement } from '@aracna/web'
import { IconFeatherElement } from '../icon-feather-element.js'

declare global {
  interface HTMLElementTagNameMap {
    'icon-feather-git-merge': IconFeatherElement
  }
}

export class IconFeatherGitMergeElement extends IconFeatherElement {
  constructor() {
    super()
    this.src = ICON_FEATHER_GIT_MERGE
  }
}

defineCustomElement('icon-feather-git-merge', IconFeatherGitMergeElement)
