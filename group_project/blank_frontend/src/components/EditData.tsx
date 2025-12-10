import React, { ChangeEvent, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { HiOutlinePencil } from "react-icons/hi2";

interface Product {
  id: string | number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  imageUrl?: string;
}

const EditProduct = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [product, setProduct] = useState<Product>({
    id: "",
    nome: "",
    descricao: "",
    preco: 0,
    categoria: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (!id) {
      console.warn("ID não definido na URL.");
      return;
    }

    const fetchProduct = async () => {
      try {
        console.log("Buscando produto com ID:", id);
        const response = await fetch(
          `http://localhost:8000/api/produtos/${id}`,
        );

        if (!response.ok) {
          console.error("Erro ao buscar produto:", response.status);
          throw new Error("Erro ao buscar produto");
        }

        const data: Product = await response.json();
        console.log("Produto carregado:", data);

        setProduct({
          id: data.id,
          nome: data.nome,
          descricao: data.descricao,
          preco: Number(data.preco),
          categoria: data.categoria?.nome || "", // acessa o nome corretamente
          imageUrl: data.imageUrl || "",
        });

        setPreview(data.imageUrl || null);
      } catch (error) {
        toast.error("Erro ao carregar dados do produto.");
        console.error("Erro no fetchProduct:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUpload = e.target.files[0];
      setSelectedFile(imageUpload);
      setPreview(URL.createObjectURL(imageUpload));
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("_method", "PUT"); // necessário para Laravel entender como PUT
      formData.append("nome", product.nome);
      formData.append("descricao", product.descricao);
      formData.append("preco", String(product.preco));
      formData.append("categoria", product.categoria);
      if (selectedFile) {
        formData.append("image", selectedFile);
      }

      const response = await fetch(`http://localhost:8000/api/produtos/${id}`, {
        method: "POST", // continua sendo POST, com _method: PUT
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar o produto");
      }

      toast.success("Produto salvo com sucesso!");
      navigate("/products");
    } catch (error) {
      toast.error("Erro ao salvar o produto");
      console.error(error);
    }
  };

  return (
    <div className="w-full p-0 m-0">
      <div className="w-full flex flex-col items-stretch gap-7 xl:gap-8">
        <div className="flex flex-col xl:flex-row items-start justify-between gap-3 xl:gap-0">
          <h2 className="font-bold text-2xl xl:text-4xl text-base-content dark:text-neutral-200">
            Edit Product
          </h2>
          <div className="w-full xl:w-auto grid grid-cols-2 xl:flex gap-3">
            <button
              onClick={() => navigate("/products")}
              className="btn btn-block xl:w-auto dark:btn-neutral"
            >
              Discard Changes
            </button>
            <button
              onClick={handleSubmit}
              className="btn btn-block xl:w-auto btn-primary"
            >
              Save Changes
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 xl:gap-8">
          <div className="relative inline-flex">
            <button
              onClick={handleIconClick}
              className="btn btn-circle btn-sm xl:btn-md top-0 right-0 absolute z-[1]"
            >
              <HiOutlinePencil className="text-xs xl:text-lg" />
            </button>
            <div className="avatar">
              <div className="w-24 xl:w-36 2xl:w-48 rounded-lg">
                <img
                  src={
                    preview || "https://via.placeholder.com/150?text=No+Image"
                  }
                  alt="product"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileSelect}
            accept="image/*"
          />

          <div className="flex flex-col items-start gap-1">
            <h3 className="font-semibold text-xl xl:text-3xl">
              {product.nome}
            </h3>
            <span className="font-normal text-base">{product.categoria}</span>
          </div>
        </div>

        <div className="w-full flex flex-col items-stretch gap-3 xl:gap-7">
          <div className="flex items-center w-full gap-3 xl:gap-5">
            <h4 className="font-semibold text-lg xl:text-2xl whitespace-nowrap">
              Product Details
            </h4>
            <div className="w-full h-[2px] bg-base-300 dark:bg-slate-700 mt-1"></div>
          </div>

          <div className="w-full grid xl:grid-cols-3 gap-3 xl:gap-5 2xl:gap-20 xl:text-base">
            <div className="w-full flex flex-col sm:grid sm:grid-cols-3 xl:flex xl:flex-col gap-3 xl:gap-5">
              {/* Name */}
              <div className="w-full grid xl:grid-cols-3 2xl:grid-cols-4 items-center gap-1 xl:gap-0">
                <label className="whitespace-nowrap">Name*</label>
                <input
                  type="text"
                  placeholder="Type here"
                  value={product.nome}
                  onChange={(e) =>
                    setProduct((prev) => ({
                      ...prev,
                      nome: e.target.value,
                    }))
                  }
                  className="input input-bordered w-full col-span-2 2xl:col-span-3"
                />
              </div>

              {/* Category */}
              <div className="w-full grid xl:grid-cols-3 2xl:grid-cols-4 items-center gap-1 xl:gap-0">
                <label className="whitespace-nowrap">Category*</label>
                <input
                  type="text"
                  placeholder="Type here"
                  value={product.categoria}
                  onChange={(e) =>
                    setProduct((prev) => ({
                      ...prev,
                      categoria: e.target.value,
                    }))
                  }
                  className="input input-bordered w-full col-span-2 2xl:col-span-3"
                />
              </div>

              {/* Price */}
              <div className="w-full grid xl:grid-cols-3 2xl:grid-cols-4 items-center gap-1 xl:gap-0">
                <label className="whitespace-nowrap">Price*</label>
                <input
                  type="number"
                  placeholder="Type here"
                  value={product.preco}
                  onChange={(e) =>
                    setProduct((prev) => ({
                      ...prev,
                      preco: Number(e.target.value),
                    }))
                  }
                  className="input input-bordered w-full col-span-2 2xl:col-span-3"
                  min={0}
                  step={0.01}
                />
              </div>
            </div>

            {/* Description */}
            <div className="w-full flex flex-col sm:grid sm:grid-cols-3 xl:flex xl:flex-col gap-3 xl:gap-5 col-span-2">
              <label>Description</label>
              <textarea
                className="textarea textarea-bordered w-full col-span-3"
                placeholder="Product description"
                value={product.descricao}
                onChange={(e) =>
                  setProduct((prev) => ({
                    ...prev,
                    descricao: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
