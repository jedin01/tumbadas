import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface Clientes {
  id: string | number;
  pNome: string;
  uNome: string;
  municipio: string;
  bairro: string;
}

const EditClientes = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [data, setData] = useState<Clientes>({
    id: "",
    pNome: "",
    uNome: "",
    municipio: "",
    bairro: "",
  });

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/clientes/${id}`);
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
      const res = await fetch(`http://localhost:8000/api/clientes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erro ao salvar dados");
      toast.success("Clientes atualizado com sucesso!");
      navigate("/clientes");
    } catch (error) {
      toast.error("Erro ao salvar dados");
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Editar Clientes</h2>
      <form className="flex flex-col gap-4">
        <div>
          <label className="block mb-1">pNome</label>
          <input
            type="text"
            name="pNome"
            value={data.pNome}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block mb-1">uNome</label>
          <input
            type="text"
            name="uNome"
            value={data.uNome}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block mb-1">municipio</label>
          <input
            type="text"
            name="municipio"
            value={data.municipio}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block mb-1">bairro</label>
          <input
            type="text"
            name="bairro"
            value={data.bairro}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="btn btn-neutral"
            onClick={() => navigate("/clientes")}
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

export default EditClientes;
