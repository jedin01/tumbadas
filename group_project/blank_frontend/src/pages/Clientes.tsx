import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../components/DataTable";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { fetchClientes } from "../api/ApiCollection";
import AddData from "../components/AddData";

const Clientes = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ["clientes"],
    queryFn: fetchClientes,
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "pNome", headerName: "Primeiro Nome", width: 150 },
    { field: "uNome", headerName: "Último Nome", width: 150 },
    { field: "municipio", headerName: "Município", width: 150 },
    { field: "bairro", headerName: "Bairro", width: 150 },
  ];

  React.useEffect(() => {
    if (isLoading) toast.loading("Carregando clientes...", { id: "clientes" });
    if (isError) toast.error("Erro ao buscar os clientes!", { id: "clientes" });
    if (isSuccess)
      toast.success("Clientes carregados com sucesso!", { id: "clientes" });
  }, [isLoading, isError, isSuccess]);

  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-3">
        <div className="w-full flex justify-between xl:mb-5">
          <div className="flex gap-1 justify-start flex-col items-start">
            <h2 className="font-bold text-2xl xl:text-4xl text-base-content dark:text-neutral-200">
              Clientes
            </h2>
            {data && data.length > 0 && (
              <span className="text-neutral dark:text-neutral-content font-medium text-base">
                {data.length} clientes encontrados
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className={`btn ${isLoading ? "btn-disabled" : "btn-primary"}`}
          >
            Adicionar Cliente +
          </button>
        </div>

        {isLoading ? (
          <DataTable
            slug="clientes"
            columns={columns}
            rows={[]}
            includeActionColumn={true}
          />
        ) : isSuccess ? (
          <DataTable
            slug="cliente"
            columns={columns}
            rows={data}
            includeActionColumn={true}
          />
        ) : (
          <>
            <DataTable
              slug="clientes"
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
          <AddData slug="cliente" isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </div>
    </div>
  );
};

export default Clientes;
