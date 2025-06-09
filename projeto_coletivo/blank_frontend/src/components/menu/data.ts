// import toast from 'react-hot-toast';
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineUsers,
  HiOutlineCube,
  HiOutlineClipboardDocumentList,
  HiOutlineDocumentChartBar,
  HiOutlinePencilSquare,
  HiOutlineCalendarDays,
  HiOutlinePresentationChartBar,
  HiOutlineDocumentText,
  HiOutlineArrowLeftOnRectangle,
  HiOutlineTag,
  HiOutlineTruck,
  HiOutlinePhone,
  HiOutlineArrowDownOnSquare,
  HiOutlineArrowUpOnSquare,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
// import { IoSettingsOutline } from 'react-icons/io5';

export const menu = [
  /*{
    catalog: "main",
    listItems: [
      {
        isLink: true,
        url: "/",
        icon: HiOutlineHome,
        label: "homepage",
      },
      {
        isLink: true,
        url: "/profile",
        icon: HiOutlineUser,
        label: "profile",
      },
    ],
  },
  {
    catalog: "lists",
    listItems: [
      {
        isLink: true,
        url: "/users",
        icon: HiOutlineUsers,
        label: "users",
      },
      {
        isLink: true,
        url: "/products",
        icon: HiOutlineCube,
        label: "products",
      },
      {
        isLink: true,
        url: "/orders",
        icon: HiOutlineClipboardDocumentList,
        label: "orders",
      },
      {
        isLink: true,
        url: "/posts",
        icon: HiOutlineDocumentChartBar,
        label: "posts",
      },
    ],
  },
  {
    catalog: "general",
    listItems: [
      {
        isLink: true,
        url: "/notes",
        icon: HiOutlinePencilSquare,
        label: "notes",
      },
      {
        isLink: true,
        url: "/calendar",
        icon: HiOutlineCalendarDays,
        label: "calendar",
      },
    ],
  },
  {
    catalog: "analytics",
    listItems: [
      {
        isLink: true,
        url: "/charts",
        icon: HiOutlinePresentationChartBar,
        label: "charts",
      },
      {
        isLink: true,
        url: "/logs",
        icon: HiOutlineDocumentText,
        label: "logs",
      },
    ],
  },
  {
    catalog: "miscellaneous",
    listItems: [
      // {
      //   isLink: true,
      //   url: '/settings',
      //   icon: IoSettingsOutline,
      //   label: 'settings',
      // },
      {
        isLink: true,
        url: "/login",
        icon: HiOutlineArrowLeftOnRectangle,
        label: "log out",
      },
    ],
  },
  */
  {
    catalog: "principal",
    listItems: [
      {
        isLink: true,
        url: "/",
        icon: HiOutlineHome,
        label: "página inicial",
      },
    ],
  },
  {
    catalog: "gerenciamento",
    listItems: [
      {
        isLink: true,
        url: "/funcionarios",
        icon: HiOutlineUsers,
        label: "funcionários",
      },
      {
        isLink: true,
        url: "/clientes",
        icon: HiOutlineUser,
        label: "clientes",
      },
      {
        isLink: true,
        url: "/products",
        icon: HiOutlineCube,
        label: "produtos",
      },
      {
        isLink: true,
        url: "/categorias",
        icon: HiOutlineTag,
        label: "categorias",
      },
      {
        isLink: true,
        url: "/fornecedores",
        icon: HiOutlineTruck,
        label: "fornecedores",
      },
    ],
  },
  {
    catalog: "estoque",
    listItems: [
      {
        isLink: true,
        url: "/estoques",
        icon: HiOutlineClipboardDocumentList,
        label: "estoque",
      },
      {
        isLink: true,
        url: "/entradas",
        icon: HiOutlineArrowDownOnSquare,
        label: "entradas",
      },
      {
        isLink: true,
        url: "/saidas",
        icon: HiOutlineArrowUpOnSquare,
        label: "saídas",
      },
    ],
  },
  {
    catalog: "vendas",
    listItems: [
      {
        isLink: true,
        url: "/vendas",
        icon: HiOutlineShoppingCart,
        label: "vendas",
      },
    ],
  },
];
