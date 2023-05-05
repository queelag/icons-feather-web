import { ElementAttributeValue, setElementAttributes } from '@aracna/web'

function waitForElementRender(selectors: string): Promise<void> {
  return new Promise((resolve) => {
    let interval: NodeJS.Timer

    interval = setInterval(() => {
      if (!document.querySelector(selectors)?.shadowRoot) {
        return
      }

      clearInterval(interval)
      resolve()
    }, 10)
  })
}

export async function render<T extends HTMLElement>(
  element: T,
  attributes?: Record<string, ElementAttributeValue>,
  listeners?: Record<string, (event: any) => any>
): Promise<void> {
  if (attributes) {
    setElementAttributes(element, attributes)
  }

  if (listeners) {
    for (let type in listeners) {
      element.addEventListener(type, listeners[type])
    }
  }

  document.body.append(element)

  return waitForElementRender(element.tagName)
}
