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
    title: "Marketing",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Social Media Marketing",
        path: "/social-media-marketing",
        newTab: false,
      },
      {
        id: 42,
        title: "Email Marketing ",
        path: "/email-marketing",
        newTab: false,
      },
      {
        id: 43,
        title: "Advertising Campaigns",
        path: "/ad-campaigns",
        newTab: false,
      },
      {
        id: 44,
        title: "Content Marketing",
        path: "/content-marketing",
        newTab: false,
      },
      {
        id: 44,
        title: "SEO Optimization",
        path: "/seo-optimization",
        newTab: false,
      },
      
    ],
  },
  {
    id: 2,
    title: "Editing",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Explainer Video",
        path: "/explainer-video",
        newTab: false,
      },
      {
        id: 42,
        title: "White Board Animation ",
        path: "/white-board-animation",
        newTab: false,
      },
      {
        id: 43,
        title: "Shorts/Reels",
        path: "/shorts-reels",
        newTab: false,
      },
      {
        id: 44,
        title: "Interactive Video",
        path: "/interactive-video",
        newTab: false,
      },
      {
        id: 44,
        title: "2d Animation",
        path: "/2d-animation",
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
  {
    id: 2,
    title: "Others",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Portfolio",
        path: "/portfolio",
        newTab: false,
      },
      {
        id: 42,
        title: "Career",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blogs",
        path: "https://fresh-spar-blog.vercel.app/",
        newTab: true,
      },
      {
        id: 44,
        title: "Courses",
        path: "https://freshspartechnologies.graphy.com/",
        newTab: true,
      },
      {
        id: 44,
        title: "Upcoming Services",
        path: "/upcoming",
        newTab: false,
      },
      
    ],
  },
  
];
export default menuData;
