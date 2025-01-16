const countElements = (tagname) => {
  let elements = document.getElementsByTagName(tagname);
  return elements.length;
};
console.log(countElements("div"));
console.log(countElements("p"));
