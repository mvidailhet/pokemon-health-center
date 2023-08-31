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

  static async animateValue(
    valueElt: HTMLElement,
    startValue: number,
    endValue: number,
    animationTime: number
  ) {
    return new Promise<void>((resolve) => {
      let firstAnimationTime = -1;

      const playAnimation = (time: number) => {
        if (firstAnimationTime === -1) {
          // time correspond au temps depuis l'affichage du site
          // il faut donc enregistrer ce temps et le soustraire
          firstAnimationTime = time;
          window.requestAnimationFrame(playAnimation);
          return;
        }
  
        const currentAnimationTime = time - firstAnimationTime;
  
        if (currentAnimationTime >= animationTime) {
          resolve();
          return;
        }
        const animationPercent = currentAnimationTime / animationTime;
        const remainingHealthToIncrease = endValue - startValue;
        const newValue = Math.round(startValue + animationPercent * remainingHealthToIncrease);
        valueElt.innerHTML = newValue.toString();
        window.requestAnimationFrame(playAnimation);
      };
      window.requestAnimationFrame(playAnimation);
    });
  }
}
