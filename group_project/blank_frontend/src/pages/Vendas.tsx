import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../components/DataTable";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { fetchVendas } from "../api/ApiCollection";

const Vendas = () => {
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ["vendas"],
    queryFn: fetchVendas,
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "funcionario",
      headerName: "Funcionário",
      flex: 1,
      minWidth: 150,
      valueGetter: (params) =>
        `${params.row.funcionario?.pNome || ""} ${params.row.funcionario?.uNome || ""}`,
    },
    {
      field: "cliente",
      headerName: "Cliente",
      flex: 1,
      minWidth: 150,
      valueGetter: (params) =>
        `${params.row.cliente?.pNome || ""} ${params.row.cliente?.uNome || ""}`,
    },
    {
      field: "produtos",
      headerName: "Produtos Vendidos",
      flex: 2,
      minWidth: 250,
      valueGetter: (params) =>
        params.row.itens
          ?.map(
            (item) => `${item.quantidade}x ${item.produto?.nome || "Produto"}`,
          )
          .join(", ") || "Nenhum produto",
    },
    {
      field: "investimento",
      headerName: "Investimento",
      flex: 1,
      minWidth: 130,
    },
    {
      field: "valorTotal",
      headerName: "Valor Total",
      flex: 1,
      minWidth: 130,
    },
    {
      field: "troco",
      headerName: "Troco",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "data",
      headerName: "Data da Venda",
      flex: 1,
      minWidth: 130,
    },
  ];

  React.useEffect(() => {
    if (isLoading) toast.loading("Carregando...", { id: "vendas" });
    if (isError) toast.error("Erro ao buscar dados!", { id: "vendas" });
    if (isSuccess) toast.success("Dados carregados!", { id: "vendas" });
  }, [isLoading, isError, isSuccess]);

  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-3">
        <div className="w-full flex justify-between mb-5">
          <div className="flex gap-1 justify-start flex-col items-start">
            <h2 className="font-bold text-2xl xl:text-4xl text-base-content dark:text-neutral-200">
              Vendas
            </h2>
            {data && data.length > 0 && (
              <span className="text-neutral-content font-medium">
                {data.length} encontrados
              </span>
            )}
          </div>
        </div>

        <DataTable
          slug="vendas"
          columns={columns}
          rows={data || []}
          includeActionColumn={true}
        />
      </div>
    </div>
  );
};

export default Vendas;
