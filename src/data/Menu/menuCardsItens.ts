
const cardMenuItens = (translate: (id: string) => string) => [

  {
    title: translate("specialMenu.capuccino.title"),
    img: '/images//menu/capuccino.jpg',
    description: translate("specialMenu.capuccino.description"),
  },
   {
    title: translate("specialMenu.chocolateCake.title"),
    img: '/images//menu/chocolateCake.jpg',
    description: translate("specialMenu.chocolateCake.description")
  },
   {
    title:  translate("specialMenu.coffe.title"), 
    img: '/images/menu/coffe.jpg',
    description:  translate("specialMenu.coffe.description"),
  },
      {
    title:  translate("specialMenu.mintTea.title"),
    img: '/images/menu/mintTea.jpg',
    description: translate("specialMenu.mintTea.description"),
  },
  {
    title: translate("specialMenu.pudim.title"),
    img: '/images/menu/pudim.jpg',
    description: translate("specialMenu.pudim.description"),
  },
];

export default cardMenuItens;
