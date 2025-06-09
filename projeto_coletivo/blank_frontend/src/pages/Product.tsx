import React from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleProduct } from "../api/ApiCollection";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Product = () => {
  const { id } = useParams();

  const { isLoading, isError, data, isSuccess } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchSingleProduct(id || ""),
  });

  React.useEffect(() => {
    if (isLoading) toast.loading("Carregando...", { id: "productRead" });
    if (isError) toast.error("Erro ao carregar dados!", { id: "productRead" });
    if (isSuccess)
      toast.success("Dados carregados com sucesso!", { id: "productRead" });
  }, [isLoading, isError, isSuccess]);

  const dataLine = isSuccess
    ? [
        { name: "01 Jun", entrada: 50, saida: 0 },
        { name: "04 Jun", entrada: 0, saida: 20 },
      ]
    : [];

  return (
    <div id="singleProduct" className="w-full p-0 m-0">
      <div className="w-full grid xl:grid-cols-2 gap-10 mt-5 xl:mt-0">
        {/* Coluna 1 */}
        <div className="w-full flex flex-col items-start gap-10">
          {/* Bloco do Produto */}
          <div className="w-full flex flex-col items-start gap-5">
            {/* Foto e título */}
            <div className="flex items-center gap-8 mb-4">
              <div className="w-24 xl:w-36 h-24 xl:h-36 bg-gray-200 flex items-center justify-center text-gray-500">
                {isLoading ? "..." : <span>P</span>}
              </div>
              <div className="flex flex-col items-start gap-1">
                <h3 className="font-semibold text-xl xl:text-3xl dark:text-white">
                  {isSuccess ? data.nome : "..."}
                </h3>
                <span className="font-normal text-base">Medicamento</span>
              </div>
            </div>

            {/* Detalhes */}
            <div className="w-full flex gap-8">
              {isSuccess ? (
                <div className="w-full grid grid-cols-3 xl:flex gap-5 xl:gap-8">
                  <div className="col-span-1 flex flex-col gap-3">
                    <span>ID</span>
                    <span>Categoria</span>
                    <span>Preço</span>
                    <span>Quantidade</span>
                    <span>Vendidos</span>
                    <span>Status</span>
                  </div>
                  <div className="col-span-2 flex flex-col font-semibold gap-3">
                    <span>{data.id}</span>
                    <span>{data.categoria.nome}</span>
                    <span>{data.preco} Kz</span>
                    <span>{data.estoque.quantidade}</span>
                    <span>{data.estoque.quantidadeVendida}</span>
                    <span>
                      {data.estoque.quantidade > 0
                        ? "Disponível"
                        : "Indisponível"}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="w-full h-52 skeleton dark:bg-neutral"></div>
              )}
            </div>
          </div>

          {/* Divider */}
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
                  <Line type="monotone" dataKey="entrada" stroke="#4ade80" />
                  <Line type="monotone" dataKey="saida" stroke="#f87171" />
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
    </div>
  );
};

export default Product;
