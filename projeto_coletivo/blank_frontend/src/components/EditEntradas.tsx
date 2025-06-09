import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface Entradas {
  id: string | number;
  idProduto: string;
  idFornecedor: string;
  quantidade: string;
  data: string;
}

const EditEntradas = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [data, setData] = useState<Entradas>({
    id: "",
    idProduto: "",
    idFornecedor: "",
    quantidade: "",
    data: "",
  });

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/entradas/${id}`);
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
      const res = await fetch(`http://localhost:8000/api/entradas/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erro ao salvar dados");
      toast.success("Entradas atualizado com sucesso!");
      navigate("/entradas");
    } catch (error) {
      toast.error("Erro ao salvar dados");
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Editar Entradas</h2>
      <form className="flex flex-col gap-4">
        <div>
          <label className="block mb-1">idProduto</label>
          <input
            type="text"
            name="idProduto"
            value={data.idProduto}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block mb-1">idFornecedor</label>
          <input
            type="text"
            name="idFornecedor"
            value={data.idFornecedor}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block mb-1">quantidade</label>
          <input
            type="text"
            name="quantidade"
            value={data.quantidade}
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
            onClick={() => navigate("/entradas")}
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

export default EditEntradas;
