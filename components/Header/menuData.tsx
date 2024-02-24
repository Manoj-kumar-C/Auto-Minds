import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  
  {
    id: 2,
    title: "Technology",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Graphic Design",
        path: "/graphic-design",
        newTab: false,
      },
      {
        id: 42,
        title: "Web Development",
        path: "/web-development",
        newTab: false,
      },
      {
        id: 43,
        title: "App Development",
        path: "/app-development",
        newTab: false,
      },
      {
        id: 44,
        title: "Branding",
        path: "/branding",
        newTab: false,
      },
      
    ],
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  // {
  //   id: 33,
  //   title: "Blog",
  //   path: "/blog",
  //   newTab: false,
  // },
  {
    id: 3,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
  
  
];
export default menuData;
