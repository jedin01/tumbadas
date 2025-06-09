import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../components/DataTable";
import { fetchProducts } from "../api/ApiCollection";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import AddData from "../components/AddData";

const Products = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ["allproducts"],
    queryFn: fetchProducts,
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "nome",
      headerName: "Nome",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "categoria",
      headerName: "Categoria",
      minWidth: 150,
      flex: 1,
      valueGetter: (params) => params.row.categoria?.nome || "Sem categoria",
    },
    {
      field: "descricao",
      headerName: "Descrição",
      minWidth: 250,
      flex: 1,
    },
    {
      field: "preco",
      headerName: "Preço",
      type: "number",
      minWidth: 100,
      flex: 1,
      valueFormatter: (params) =>
        `Kz ${Number(params.value).toLocaleString("pt-AO", {
          minimumFractionDigits: 2,
        })}`,
    },
  ];

  React.useEffect(() => {
    if (isLoading) {
      toast.loading("Carregando produtos...", { id: "promiseProducts" });
    }
    if (isError) {
      toast.error("Erro ao carregar os produtos!", {
        id: "promiseProducts",
      });
    }
    if (isSuccess) {
      toast.success("Produtos carregados com sucesso!", {
        id: "promiseProducts",
      });
    }
  }, [isError, isLoading, isSuccess]);

  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-3">
        <div className="w-full flex justify-between xl:mb-5">
          <div className="flex gap-1 justify-start flex-col items-start">
            <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
              Produtos
            </h2>
            {data && data.length > 0 && (
              <span className="text-neutral dark:text-neutral-content font-medium text-base">
                {data.length} produtos encontrados
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className={`btn ${isLoading ? "btn-disabled" : "btn-primary"}`}
          >
            Adicionar Produto +
          </button>
        </div>

        {isLoading ? (
          <DataTable
            slug="produtos"
            columns={columns}
            rows={[]}
            includeActionColumn={true}
          />
        ) : isSuccess ? (
          <DataTable
            slug="product"
            columns={columns}
            rows={data}
            includeActionColumn={true}
          />
        ) : (
          <>
            <DataTable
              slug="products"
              columns={columns}
              rows={[]}
              includeActionColumn={true}
            />
            <div className="w-full flex justify-center">
              Erro ao carregar os dados!
            </div>
          </>
        )}

        {isOpen && (
          <AddData slug={"product"} isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </div>
    </div>
  );
};

export default Products;
