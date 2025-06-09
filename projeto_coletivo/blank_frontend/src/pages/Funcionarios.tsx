import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../components/DataTable";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { fetchFuncionarios } from "../api/ApiCollection";

const Funcionarios = () => {
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ["funcionarios"],
    queryFn: fetchFuncionarios,
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "pNome", headerName: "Primeiro Nome", width: 150 },
    { field: "uNome", headerName: "Último Nome", width: 150 },
    { field: "email", headerName: "Email", width: 220 },
    { field: "municipio", headerName: "Município", width: 150 },
    { field: "bairro", headerName: "Bairro", width: 150 },
  ];

  React.useEffect(() => {
    if (isLoading) toast.loading("Carregando...", { id: "funcionarios" });
    if (isError) toast.error("Erro ao buscar dados!", { id: "funcionarios" });
    if (isSuccess) toast.success("Dados carregados!", { id: "funcionarios" });
  }, [isLoading, isError, isSuccess]);

  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-3">
        <div className="w-full flex justify-between mb-5">
          <div className="flex gap-1 justify-start flex-col items-start">
            <h2 className="font-bold text-2xl xl:text-4xl text-base-content dark:text-neutral-200">
              Funcionarios
            </h2>
            {data && data.length > 0 && (
              <span className="text-neutral-content font-medium">
                {data.length} encontrados
              </span>
            )}
          </div>
        </div>

        <DataTable
          slug="funcionarios"
          columns={columns}
          rows={data || []}
          includeActionColumn={true}
        />
      </div>
    </div>
  );
};

export default Funcionarios;
