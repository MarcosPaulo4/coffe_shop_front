
const MenuItens = (translate: (id: string) => string) => [

  {
    groupby: "Coffe",
    title: translate("specialMenu.capuccino.title"),
    value: 12.90,
    description: translate("specialMenu.capuccino.description"),
  },
  {
    groupby: "Dessert",
    title: translate("specialMenu.chocolateCake.title"),
    value: 15.90,
    description: translate("specialMenu.chocolateCake.description")
  },
  {
    groupby: "Coffe",
    title: translate("specialMenu.coffe.title"), 
    value: 7.90,
    description:  translate("specialMenu.coffe.description"),
  },
  {
    groupby: "Coffe",
    title:  translate("specialMenu.mintTea.title"),
    value: 7.90,
    description: translate("specialMenu.mintTea.description"),
  },
  {
    groupby:"Dessert",
    title: translate("specialMenu.pudim.title"),
    value: 12.00,
    description: translate("specialMenu.pudim.description"),
  },
];

export default MenuItens;
