import { wf } from '@aracna/core'
import { type ElementAttributeValue, setElementAttributes } from '@aracna/web'

function waitForElementRender(selectors: string): Promise<void | Error> {
  return wf(() => {
    return document.querySelector(selectors)?.shadowRoot
  })
}

export async function render<T extends HTMLElement>(
  element: T,
  attributes?: Record<string, ElementAttributeValue>,
  listeners?: Record<string, (event: any) => any>
): Promise<void | Error> {
  if (attributes) {
    setElementAttributes(element, attributes)
  }

  if (listeners) {
    for (let type in listeners) {
      element.addEventListener(type, listeners[type])
    }
  }

  document.body.append(element)

  return waitForElementRender(element.tagName.toLowerCase())
}
