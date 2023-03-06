export function flatChildArray(node: HTMLElement) : HTMLElement[] {
  const result : HTMLElement[] = [];

  function getChildren(childNodes: NodeListOf<ChildNode>) {
    if (childNodes.length === 0) return;
    childNodes.forEach((child) => {
      result.push(child as HTMLElement);
      getChildren(child.childNodes);
    });
  }

  getChildren(node.childNodes);

  return result;
}