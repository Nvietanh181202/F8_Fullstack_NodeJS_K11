const menu = [
  {
    id: 1,
    name: "Home",
    parentId: 0,
  },
  {
    id: 2,
    name: "About",
    parentId: 0,
  },
  {
    id: 3,
    name: "News",
    parentId: 0,
  },
  {
    id: 4,
    name: "Products",
    parentId: 0,
  },
  {
    id: 5,
    name: "Contact",
    parentId: 0,
  },
  {
    id: 6,
    name: "T-Shirt",
    parentId: 4,
  },
  {
    id: 7,
    name: "Jean",
    parentId: 4,
  },
  {
    id: 8,
    name: "Skirt",
    parentId: 4,
  },
];

const buildMenu = (menu) => {
  const outerMenu = document.createElement("ul");
  outerMenu.setAttribute("id", "main-menu");
  document.body.appendChild(outerMenu);
  for (const item of menu) {
    const itemLi = document.createElement("li");
    itemLi.setAttribute("id", item.id);
    if (item.parentId === 0) {
      itemLi.innerHTML = `<a style ="font-size: 24px"  href="#">${item.name}</a>`;
      outerMenu.appendChild(itemLi);
    } else {
      const parent = document.getElementById(item.parentId);
      let subMenu = parent.getElementsByTagName("ul")[0];
      if (!subMenu) {
        subMenu = document.createElement("ul");
        parent.append(subMenu);
      }
      itemLi.innerHTML = `<a style ="font-size: 20px"  href="#">${item.name}</a>`;
      subMenu.appendChild(itemLi);
    }
  }
  const removeLis = document.getElementsByTagName("li");
  for (lis of removeLis) {
    lis.removeAttribute("id");
  }
};

buildMenu(menu);
