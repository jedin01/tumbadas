import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../components/DataTable";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { fetchFornecedores } from "../api/ApiCollection";
import AddData from "../components/AddData";

const Fornecedores = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ["fornecedores"],
    queryFn: fetchFornecedores,
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "pNome", headerName: "Primeiro Nome", flex: 1, minWidth: 150 },
    { field: "uNome", headerName: "Último Nome", flex: 1, minWidth: 150 },
    { field: "municipio", headerName: "Município", flex: 1, minWidth: 150 },
    { field: "bairro", headerName: "Bairro", flex: 1, minWidth: 150 },
  ];

  React.useEffect(() => {
    if (isLoading)
      toast.loading("Carregando fornecedores...", { id: "fornecedores" });
    if (isError)
      toast.error("Erro ao buscar os fornecedores!", { id: "fornecedores" });
    if (isSuccess)
      toast.success("Fornecedores carregados com sucesso!", {
        id: "fornecedores",
      });
  }, [isLoading, isError, isSuccess]);

  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-3">
        <div className="w-full flex justify-between xl:mb-5">
          <div className="flex gap-1 justify-start flex-col items-start">
            <h2 className="font-bold text-2xl xl:text-4xl text-base-content dark:text-neutral-200">
              Fornecedores
            </h2>
            {data && data.length > 0 && (
              <span className="text-neutral dark:text-neutral-content font-medium text-base">
                {data.length} fornecedores encontrados
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className={`btn ${isLoading ? "btn-disabled" : "btn-primary"}`}
          >
            Adicionar Fornecedor +
          </button>
        </div>

        {isLoading ? (
          <DataTable
            slug="fornecedores"
            columns={columns}
            rows={[]}
            includeActionColumn={true}
          />
        ) : isSuccess ? (
          <DataTable
            slug="fornecedor"
            columns={columns}
            rows={data}
            includeActionColumn={true}
          />
        ) : (
          <>
            <DataTable
              slug="fornecedores"
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
          <AddData slug="fornecedor" isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </div>
    </div>
  );
};

export default Fornecedores;
