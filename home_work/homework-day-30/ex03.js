const countElements = (tagname) => {
  if (typeof tagname !== "string" || tagname.trim() === "") {
    console.log("Không phải chuỗi hợp lệ");
  }
  let elements = document.getElementsByTagName(tagname);
  return elements.length;
};
console.log(countElements("div"));
console.log(countElements("p"));
console.log(countElements(""));
console.log(countElements(123));
