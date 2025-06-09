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
      field: "descricao",
      headerName: "Descrição",
      minWidth: 300,
      flex: 2,
    },
    {
      field: "preco",
      headerName: "Preço",
      type: "number",
      minWidth: 120,
      flex: 1,
      valueFormatter: (params) =>
        params.value
          ? new Intl.NumberFormat("pt-AO", {
              style: "currency",
              currency: "AOA", // ou USD se preferir
            }).format(params.value)
          : "",
    },
  ];

  React.useEffect(() => {
    if (isLoading) {
      toast.loading("A carregar produtos...", { id: "promiseProducts" });
    }
    if (isError) {
      toast.error("Erro ao buscar os produtos!", {
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

        <DataTable
          columns={columns}
          rows={data}
          includeActionColumn
          showEditButton={false}
          onView={(id) => console.log("Visualizar:", id)}
          onDelete={async (id) => {
            console.log("Deletar produto", id);
          }}
        />

        {isError && (
          <div className="w-full flex justify-center text-red-500 mt-4">
            Erro ao carregar os produtos!
          </div>
        )}

        {isOpen && (
          <AddData slug="product" isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </div>
    </div>
  );
};

export default Products;
