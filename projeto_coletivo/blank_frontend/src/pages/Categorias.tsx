import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../components/DataTable";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { fetchCategorias } from "../api/ApiCollection";
import AddData from "../components/AddData";

const Categorias = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ["categorias"],
    queryFn: fetchCategorias,
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "nome", headerName: "Nome", width: 200 },
    { field: "descricao", headerName: "Descrição", width: 300 },
  ];

  React.useEffect(() => {
    if (isLoading)
      toast.loading("Carregando categorias...", { id: "categorias" });
    if (isError)
      toast.error("Erro ao buscar as categorias!", { id: "categorias" });
    if (isSuccess)
      toast.success("Categorias carregadas com sucesso!", {
        id: "categorias",
      });
  }, [isLoading, isError, isSuccess]);

  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-3">
        <div className="w-full flex justify-between xl:mb-5">
          <div className="flex gap-1 justify-start flex-col items-start">
            <h2 className="font-bold text-2xl xl:text-4xl text-base-content dark:text-neutral-200">
              Categorias
            </h2>
            {data && data.length > 0 && (
              <span className="text-neutral dark:text-neutral-content font-medium text-base">
                {data.length} categorias encontradas
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className={`btn ${isLoading ? "btn-disabled" : "btn-primary"}`}
          >
            Adicionar Categoria +
          </button>
        </div>

        {isLoading ? (
          <DataTable
            slug="categorias"
            columns={columns}
            rows={[]}
            includeActionColumn={true}
          />
        ) : isSuccess ? (
          <DataTable
            slug="categoria"
            columns={columns}
            rows={data}
            includeActionColumn={true}
          />
        ) : (
          <>
            <DataTable
              slug="categorias"
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
          <AddData slug="categoria" isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </div>
    </div>
  );
};

export default Categorias;
