import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface Vendas {
  id: string | number;
  idFuncionario: string;
  idCliente: string;
  investimento: string;
  valorTotal: string;
  troco: string;
  data: string;
}

const EditVendas = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [data, setData] = useState<Vendas>({
    id: "",
    idFuncionario: "",
    idCliente: "",
    investimento: "",
    valorTotal: "",
    troco: "",
    data: "",
  });

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/vendas/${id}`);
        if (!res.ok) throw new Error("Erro ao buscar dados");
        const result = await res.json();
        setData(result);
      } catch (error) {
        toast.error("Erro ao carregar dados.");
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/vendas/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erro ao salvar dados");
      toast.success("Vendas atualizado com sucesso!");
      navigate("/vendas");
    } catch (error) {
      toast.error("Erro ao salvar dados");
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Editar Vendas</h2>
      <form className="flex flex-col gap-4">
        <div>
          <label className="block mb-1">idFuncionario</label>
          <input
            type="text"
            name="idFuncionario"
            value={data.idFuncionario}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block mb-1">idCliente</label>
          <input
            type="text"
            name="idCliente"
            value={data.idCliente}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block mb-1">investimento</label>
          <input
            type="text"
            name="investimento"
            value={data.investimento}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block mb-1">valorTotal</label>
          <input
            type="text"
            name="valorTotal"
            value={data.valorTotal}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block mb-1">troco</label>
          <input
            type="text"
            name="troco"
            value={data.troco}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block mb-1">data</label>
          <input
            type="text"
            name="data"
            value={data.data}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="btn btn-neutral"
            onClick={() => navigate("/vendas")}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditVendas;
