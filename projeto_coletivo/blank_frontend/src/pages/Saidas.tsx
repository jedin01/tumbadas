import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../components/DataTable";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { fetchSaidas } from "../api/ApiCollection";
import AddData from "../components/AddData";

const Saidas = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ["saidas"],
    queryFn: fetchSaidas,
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
      headerName: "Quantidade",
      flex: 1,
      minWidth: 150,
    },
    {
      field: "data",
      headerName: "Data da Saída",
      flex: 1,
      minWidth: 150,
    },
  ];

  React.useEffect(() => {
    if (isLoading) toast.loading("Carregando saídas...", { id: "saidas" });
    if (isError) toast.error("Erro ao buscar saídas!", { id: "saidas" });
    if (isSuccess) toast.success("Saídas carregadas!", { id: "saidas" });
  }, [isLoading, isError, isSuccess]);

  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-3">
        <div className="w-full flex justify-between mb-5">
          <div className="flex gap-1 justify-start flex-col items-start">
            <h2 className="font-bold text-2xl xl:text-4xl text-base-content dark:text-neutral-200">
              Saídas
            </h2>
            {data && data.length > 0 && (
              <span className="text-neutral-content font-medium">
                {data.length} encontrados
              </span>
            )}
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className={`btn ${isLoading ? "btn-disabled" : "btn-primary"}`}
          >
            Adicionar Saída +
          </button>
        </div>

        {isLoading ? (
          <DataTable
            slug="saidas"
            columns={columns}
            rows={[]}
            includeActionColumn={true}
          />
        ) : isSuccess ? (
          <DataTable
            slug="saida"
            columns={columns}
            rows={data}
            includeActionColumn={true}
          />
        ) : (
          <>
            <DataTable
              slug="saidas"
              columns={columns}
              rows={[]}
              includeActionColumn={true}
            />
            <div className="w-full flex justify-center mt-2 text-error font-semibold">
              Erro ao carregar dados das saídas.
            </div>
          </>
        )}

        {isOpen && (
          <AddData slug="saida" isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </div>
    </div>
  );
};

export default Saidas;
