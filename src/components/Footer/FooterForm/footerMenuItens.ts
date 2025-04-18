
const footerMenus = (translate: (id: string) => string ) => [
  {
    title: translate("explore"),
    menuItems: [
      {
        title: translate("menu"),
        path: "/",
      },
      {
        title: translate("aboutUs"),
        path: "/",
      },
    ],
  },
  {
    title: translate("visitUs"),
    menuItems: [
      {
        title: translate("ourLocation"),
        path: "/",
      },
      {
        title: translate("contactForm"),
        path: "/",
      },
            {
        title: translate("faq"),
        path: "/",
      },
    ],
  },
  {
    title: translate("ourDrinks"),
    menuItems: [
      {
        title: translate("coffe"),
        path: "/",
      },
      {
        title: translate("tea"),
        path: "/",
      },
      {
        title: translate("specialityDrinks"),
        path: "/",
      },
    ],
  },
];

export default footerMenus;
