export class Utils {
  static createNewElement(
    eltName: string,
    classes: string,
    parent: HTMLElement,
    innerHTML: string | null = null,
    append = true
  ) {
    const elt = document.createElement(eltName);
    const classNames = classes.split(" ");
    classNames.forEach((className) => {
      elt.classList.add(className);
    });

    if (innerHTML) elt.innerHTML = innerHTML;
    append ? parent.appendChild(elt) : parent.prepend(elt);
    return elt;
  }
}
