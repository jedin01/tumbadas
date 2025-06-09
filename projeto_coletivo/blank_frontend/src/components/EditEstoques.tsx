import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface Estoques {
  id: string | number;
  idProduto: string;
  quantidade: string;
  quantidadeVendida: string;
}

const EditEstoques = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [data, setData] = useState<Estoques>({
    id: "",
    idProduto: "",
    quantidade: "",
    quantidadeVendida: "",
  });

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/estoques/${id}`);
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
      const res = await fetch(`http://localhost:8000/api/estoques/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erro ao salvar dados");
      toast.success("Estoques atualizado com sucesso!");
      navigate("/estoques");
    } catch (error) {
      toast.error("Erro ao salvar dados");
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Editar Estoques</h2>
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
          <label className="block mb-1">quantidadeVendida</label>
          <input
            type="text"
            name="quantidadeVendida"
            value={data.quantidadeVendida}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="btn btn-neutral"
            onClick={() => navigate("/estoques")}
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

export default EditEstoques;
