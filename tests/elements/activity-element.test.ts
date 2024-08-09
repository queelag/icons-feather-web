import { wf } from '@aracna/core'
import { SVG_NAMESPACE_URI } from '@aracna/web-components'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import '../../src/elements/activity-element'
import type { IconFeatherActivityElement } from '../../src/elements/activity-element'
import { render } from '../../vitest/dom-utils'

describe('IconElement', () => {
  let icon: IconFeatherActivityElement

  beforeEach(() => {
    icon = document.createElement('icon-feather-activity')
  })

  afterEach(() => {
    icon.remove()
  })

  it('has correct attributes', async () => {
    await render(icon)
    await wf(() => icon.shadowRoot?.querySelector('polyline'))

    expect(icon.shadowRoot?.querySelector('svg')?.getAttribute('fill')).toBe('inherit')
    expect(icon.shadowRoot?.querySelector('svg')?.getAttribute('stroke')).toBe('inherit')
    expect(icon.shadowRoot?.querySelector('svg')?.getAttribute('stroke-linecap')).toBe('round')
    expect(icon.shadowRoot?.querySelector('svg')?.getAttribute('stroke-linejoin')).toBe('round')
    expect(icon.shadowRoot?.querySelector('svg')?.getAttribute('stroke-width')).toBe('2')
    expect(icon.shadowRoot?.querySelector('svg')?.getAttribute('style')).toBe(
      'height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px;'
    )
    expect(icon.shadowRoot?.querySelector('svg')?.getAttribute('viewBox')).toBe('0 0 24 24')
    expect(icon.shadowRoot?.querySelector('svg')?.getAttribute('xmlns')).toBe(SVG_NAMESPACE_URI)
  })
})
