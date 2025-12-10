import React from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleSaida } from "../api/ApiCollection";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Saida = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">
        Nenhum saidas especificado.
      </div>
    );
  }

  const { isLoading, isError, data, isSuccess } = useQuery({
    queryKey: ["saidas", id],
    queryFn: () => fetchSingleSaida(id),
    enabled: !!id,
  });

  React.useEffect(() => {
    if (isLoading) toast.loading("Carregando...", { id: "saidasRead" });
    if (isError) toast.error("Erro ao carregar dados!", { id: "saidasRead" });
    if (isSuccess)
      toast.success("Dados carregados com sucesso!", { id: "saidasRead" });
  }, [isLoading, isError, isSuccess]);

  const dataLine = isSuccess
    ? [
        { name: "01 Jun", entrada: 50, saida: 0 },
        { name: "04 Jun", entrada: 0, saida: 20 },
      ]
    : [];

  return (
    <div id="singleSaidas" className="w-full p-0 m-0">
      {isError && (
        <div className="text-center mt-10 text-red-500 font-semibold">
          Erro ao carregar o saidas.
        </div>
      )}

      {!isError && (
        <div className="w-full grid xl:grid-cols-2 gap-10 mt-5 xl:mt-0">
          {/* Coluna 1 */}
          <div className="w-full flex flex-col items-start gap-10">
            {/* Bloco do Saidas */}
            <div className="w-full flex flex-col items-start gap-5">
              {/* Foto e título */}
              <div className="flex items-center gap-8 mb-4">
                <div className="flex flex-col items-start gap-1">
                  <h3 className="font-semibold text-xl xl:text-3xl dark:text-white">
                    {isSuccess ? data.nome || data.pNome || "Sem nome" : "..."}
                  </h3>
                  <span className="font-normal text-base">Saidas</span>
                </div>
              </div>

              {/* Detalhes */}
              <div className="w-full flex gap-8">
                {isSuccess ? (
                  <div className="w-full grid grid-cols-3 xl:flex gap-5 xl:gap-8">
                    <div className="col-span-1 flex flex-col gap-3">
                      <span>Id</span>
                      <span>IdProduto</span>
                      <span>Quantidade</span>
                      <span>Data</span>
                    </div>
                    <div className="col-span-2 flex flex-col font-semibold gap-3">
                      <span>{data.id ?? "-"}</span>
                      <span>{data.idProduto ?? "-"}</span>
                      <span>{data.quantidade ?? "-"}</span>
                      <span>{data.data ?? "-"}</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-52 skeleton dark:bg-neutral"></div>
                )}
              </div>
            </div>

            <div className="w-full h-[2px] bg-base-300 dark:bg-slate-700"></div>

            {/* Gráfico */}
            {isSuccess ? (
              <div className="w-full min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dataLine}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="entrada"
                      stroke="#4ade80"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="saida"
                      stroke="#f87171"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="w-full min-h-[300px] skeleton dark:bg-neutral"></div>
            )}
          </div>

          {/* Coluna 2 - Atividades */}
          <div className="w-full flex flex-col items-start gap-5">
            <h2 className="text-2xl font-semibold dark:text-white">
              Atividades Recentes
            </h2>
            {isSuccess ? (
              <ul>
                <li className="p-4 bg-base-200 dark:bg-neutral dark:text-white mb-2">
                  <span>Entrada de 50 unidades</span>
                  <span className="text-xs block">01 de Junho</span>
                </li>
                <li className="p-4 bg-base-200 dark:bg-neutral dark:text-white mb-2">
                  <span>Saída de 20 unidades</span>
                  <span className="text-xs block">04 de Junho</span>
                </li>
              </ul>
            ) : (
              [...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="w-full h-20 skeleton dark:bg-neutral"
                ></div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Saida;
