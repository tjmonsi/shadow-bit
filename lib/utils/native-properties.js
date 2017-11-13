// Save map of native properties; this forms a blacklist or properties
// that won't have their values "saved" by `saveAccessorValue`, since
// reading from an HTMLElement accessor from the context of a prototype throws

export const nativeProperties = (element = HTMLElement) => {
  const native = {};
  let proto = element.prototype;
  while (proto) {
    let props = Object.getOwnPropertyNames(proto);
    for (let i=0; i<props.length; i++) {
      native[props[i]] = true;
    }
    proto = Object.getPrototypeOf(proto);
  }    
}
