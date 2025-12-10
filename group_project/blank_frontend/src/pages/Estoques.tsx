import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../components/DataTable";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { fetchEstoques } from "../api/ApiCollection";

const Estoques = () => {
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ["estoques"],
    queryFn: fetchEstoques,
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "produto",
      headerName: "Produto",
      flex: 1,
      minWidth: 200,
      valueGetter: (params) =>
        params.row.produto?.nome || "Produto não disponível",
    },
    {
      field: "quantidade",
      headerName: "Quantidade em Estoque",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "quantidadeVendida",
      headerName: "Quantidade Vendida",
      flex: 1,
      minWidth: 150,
    },
  ];

  React.useEffect(() => {
    if (isLoading) toast.loading("Carregando estoques...", { id: "estoques" });
    if (isError) toast.error("Erro ao buscar estoques!", { id: "estoques" });
    if (isSuccess) toast.success("Estoques carregados!", { id: "estoques" });
  }, [isLoading, isError, isSuccess]);

  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-3">
        <div className="w-full flex justify-between mb-5">
          <div className="flex gap-1 justify-start flex-col items-start">
            <h2 className="font-bold text-2xl xl:text-4xl text-base-content dark:text-neutral-200">
              Estoques
            </h2>
            {data && data.length > 0 && (
              <span className="text-neutral dark:text-neutral-content font-medium text-base">
                {data.length} registros encontrados
              </span>
            )}
          </div>
        </div>

        {isLoading ? (
          <DataTable
            slug="estoques"
            columns={columns}
            rows={[]}
            includeActionColumn={true}
          />
        ) : isSuccess ? (
          <DataTable
            slug="estoques"
            columns={columns}
            rows={data}
            includeActionColumn={true}
          />
        ) : (
          <>
            <DataTable
              slug="estoques"
              columns={columns}
              rows={[]}
              includeActionColumn={true}
            />
            <div className="w-full flex justify-center mt-2 text-error font-semibold">
              Erro ao carregar os dados dos estoques.
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Estoques;
