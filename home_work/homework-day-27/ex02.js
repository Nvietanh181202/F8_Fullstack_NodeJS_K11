const categories = [
  {
    id: 1,
    name: "Electronics",
    children: [
      {
        id: 2,
        name: "Laptops",
        children: [
          {
            id: 3,
            name: "Apple",
          },
          {
            id: 4,
            name: "Dell",
          },
        ],
      },
      {
        id: 5,
        name: "Headphones",
      },
    ],
  },
  {
    id: 6,
    name: "Books",
    children: [
      {
        id: 7,
        name: "Fiction",
        children: [
          {
            id: 8,
            name: "Thrillers",
          },
          {
            id: 9,
            name: "Mystery",
          },
        ],
      },
      {
        id: 10,
        name: "Non-Fiction",
      },
    ],
  },
];

function flattenCategories(categories, parentId = 0) {
  if (!Array.isArray(categories)) {
    console.log("Sai dữ liệu");
    return;
  }
  let result = [];
  categories.forEach((category) => {
    result.push({ id: category.id, name: category.name, parentId });
    if (Array.isArray(category.children) && category.children.length > 0) {
      result = result.concat(flattenCategories(category.children, category.id));
    }
  });
  result.sort((a, b) => a.id - b.id);
  return result;
}

const result = flattenCategories(categories);
console.log(result);
