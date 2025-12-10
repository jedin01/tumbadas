// import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/menu/Menu";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Posts from "./pages/Posts";
import Notes from "./pages/Notes";
import Calendar from "./pages/Calendar";
import Charts from "./pages/Charts";
import Logs from "./pages/Logs";
import ToasterProvider from "./components/ToasterProvider";
import EditProfile from "./pages/EditProfile";
import User from "./pages/User";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Funcionarios from "./pages/Funcionarios";
import Categorias from "./pages/Categorias";
import Fornecedores from "./pages/Fornecedores";
import Entradas from "./pages/Entradas";
import Saidas from "./pages/Saidas";
import Vendas from "./pages/Vendas";
import Estoques from "./pages/Estoques";
import EditData from "./components/EditData";
import EditFuncionarios from "./components/EditFuncionarios";
import EditClientes from "./components/EditClientes";
import EditFornecedores from "./components/EditFornecedores";
import EditCategorias from "./components/EditCategorias";
import EditEstoques from "./components/EditEstoques";
import EditEntradas from "./components/EditEntradas";
import EditSaidas from "./components/EditSaidas";
import EditVendas from "./components/EditVendas";
import Cliente from "./pages/Cliente";
import Clientes from "./pages/Clientes";
import Fornecedor from "./pages/Fornecedor";
import Categoria from "./pages/Categoria";
import Estoque from "./pages/Estoque";
import Entrada from "./pages/Entrada";
import Saida from "./pages/Saida";
import Venda from "./pages/Venda";

function App() {
  const Layout = () => {
    return (
      <div
        id="rootContainer"
        className="w-full p-0 m-0 overflow-visible min-h-screen flex flex-col justify-between"
      >
        <ToasterProvider />
        <ScrollRestoration />
        <div>
          <Navbar />
          <div className="w-full flex gap-0 pt-20 xl:pt-[96px] 2xl:pt-[112px] mb-auto">
            <div className="hidden xl:block xl:w-[250px] 2xl:w-[280px] 3xl:w-[350px] border-r-2 border-base-300 dark:border-slate-700 px-3 xl:px-4 xl:py-1">
              <Menu />
            </div>
            <div className="w-full px-4 xl:px-4 2xl:px-5 xl:py-2 overflow-clip">
              <Outlet />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/profile/edit",
          element: <EditProfile />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        // routes.tsx
        // {
        { path: "/funcionario/:id", element: <Funcionarios /> },
        {
          path: "/cliente/:id",
          element: <Cliente />,
        },
        {
          path: "/fornecedor/:id",
          element: <Fornecedor />,
        },
        {
          path: "/categoria:id",
          element: <Categoria />,
        },
        {
          path: "/estoque/:id",
          element: <Estoque />,
        },
        {
          path: "/entrada/:id",
          element: <Entrada />,
        },
        {
          path: "/saida/:id",
          element: <Saida />,
        },
        {
          path: "/venda/:id",
          element: <Venda />,
        },

        {
          path: "/product/edit/:id/",
          element: <EditData slug="product" />,
        },

        {
          path: "/funcionario/edit/:id/",
          element: <EditFuncionarios slug="funcionarios" />,
        },
        {
          path: "/cliente/edit/:id/",
          element: <EditClientes slug="clientes" />,
        },
        {
          path: "/fornecedor/edit/:id/",
          element: <EditFornecedores slug="fornecedores" />,
        },
        {
          path: "/categoria/edit/:id/",
          element: <EditCategorias slug="categorias" />,
        },
        {
          path: "/estoque/edit/:id/",
          element: <EditEstoques slug="estoques" />,
        },
        {
          path: "/entrada/edit/:id/",
          element: <EditEntradas slug="entradas" />,
        },
        {
          path: "/saida/edit/:id/",
          element: <EditSaidas slug="saidas" />,
        },
        {
          path: "/venda/edit/:id/",
          element: <EditVendas slug="vendas" />,
        },

        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/notes",
          element: <Notes />,
        },
        {
          path: "/calendar",
          element: <Calendar />,
        },
        {
          path: "/charts",
          element: <Charts />,
        },
        {
          path: "/logs",
          element: <Logs />,
        },
        {
          path: "/clientes",
          element: <Clientes />,
        },
        {
          path: "/funcionarios",
          element: <Funcionarios />,
        },
        {
          path: "/categorias",
          element: <Categorias />,
        },
        {
          path: "/fornecedores",
          element: <Fornecedores />,
        },
        {
          path: "/estoques",
          element: <Estoques />,
        },
        {
          path: "/entradas",
          element: <Entradas />,
        },
        {
          path: "/saidas",
          element: <Saidas />,
        },
        {
          path: "/vendas",
          element: <Vendas />,
        },
      ],
      errorElement: <Error />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
