#!/bin/bash

DIR="."

declare -A entidades_campos
entidades_campos=(
  ["Funcionarios"]="pNome uNome email municipio bairro"
  ["Clientes"]="pNome uNome municipio bairro"
  ["Fornecedores"]="pNome uNome municipio bairro"
  ["Categorias"]="nome descricao"
  ["Estoques"]="idProduto quantidade quantidadeVendida"
  ["Entradas"]="idProduto idFornecedor quantidade data"
  ["Saidas"]="idProduto quantidade data"
  ["Vendas"]="idFuncionario idCliente investimento valorTotal troco data"
)

for entidade in "${!entidades_campos[@]}"; do
  campos="${entidades_campos[$entidade]}"
  file_path="$DIR/Edit${entidade}.tsx"

  echo "Criando arquivo $file_path"

  # Início do arquivo
  cat > "$file_path" <<EOF
import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface ${entidade} {
  id: string | number;
EOF

  # Loop para inserir os campos na interface
  for campo in $campos; do
    echo "  $campo: string;" >> "$file_path"
  done

  # Continua o conteúdo
  cat >> "$file_path" <<EOF
}

const Edit${entidade} = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [data, setData] = useState<${entidade}>({
    id: "",
EOF

  for campo in $campos; do
    echo "    $campo: \"\"," >> "$file_path"
  done

  cat >> "$file_path" <<EOF
  });

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(\`http://localhost:8000/api/${entidade,,}/\${id}\`);
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
      const res = await fetch(\`http://localhost:8000/api/${entidade,,}/\${id}\`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erro ao salvar dados");
      toast.success("${entidade} atualizado com sucesso!");
      navigate("/${entidade,,}");
    } catch (error) {
      toast.error("Erro ao salvar dados");
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Editar ${entidade}</h2>
      <form className="flex flex-col gap-4">
EOF

  # Campos inputs no formulário
  for campo in $campos; do
    cat >> "$file_path" <<EOF
        <div>
          <label className="block mb-1">${campo}</label>
          <input
            type="text"
            name="${campo}"
            value={data.${campo}}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
EOF
  done

  cat >> "$file_path" <<EOF
        <div className="flex gap-2">
          <button
            type="button"
            className="btn btn-neutral"
            onClick={() => navigate("/${entidade,,}")}
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

export default Edit${entidade};
EOF

  echo "Arquivo $file_path criado!"
done
