const renderElem = ({ tagName, attrs, children }) => {
  const $el = document.createElement(tagName)

  // Set attributes...
  for (const [key, value] of Object.entries(attrs)) {
    $el.setAttribute(key, value)
  }

  // Set children...
  for (const child of children) {
    const $child = render(child)

    $el.appendChild($child)
  }

  return $el
}

const render = vNode => {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode)
  }

  return renderElem(vNode)
}

export default render
