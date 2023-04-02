const isObject = (val) =>
  typeof val === 'object' && val !== null && !Array.isArray(val);

function createDom(root) {
  let dom;

  if (isObject(root)) {
    dom = document.createElement(root.type);
    const attrs = root.attributes;

    for (const key in attrs) {
      dom.setAttribute(key, attrs[key]);
    }

    if (root.children) {
      root.children.forEach((child) => {
        dom.appendChild(createDom(child));
      });
    }
  } else {
    dom = document.createTextNode(root);
  }

  return dom;
}
