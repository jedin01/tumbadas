import React, { ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import { HiOutlineXMark } from "react-icons/hi2";

interface AddDataProps {
  slug: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddData: React.FC<AddDataProps> = ({
  slug,
  isOpen,
  //   columns,
  setIsOpen,
}) => {
  // global
  const [showModal, setShowModal] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);

  // add user
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [isVerified, setIsVerified] = React.useState("");
  const [formUserIsEmpty, setFormUserIsEmpty] = React.useState(true);

  // add product
  //
  //
  const [nome, setNome] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [idCategoria, setIdCategoria] = React.useState("");
  const [preco, setPreco] = React.useState("");
  const [formProductIsEmpty, setFormProductIsEmpty] = React.useState(true);

  // global
  const loadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUpload = e.target.files[0];
      setFile(imageUpload);
      setPreview(URL.createObjectURL(imageUpload));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (slug === "product") {
      const newProduct = {
        nome,
        descricao,
        idCategoria,
        preco: parseFloat(preco),
      };

      try {
        const response = await fetch("http://localhost:8000/api/produtos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        });

        if (!response.ok) {
          throw new Error("Erro ao adicionar produto.");
        }

        toast.success("Produto adicionado com sucesso!");
        setIsOpen(false);
      } catch (error) {
        toast.error("Erro ao submeter dados.");
        console.error(error);
      }
    }
  };

  React.useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  // add user
  React.useEffect(() => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      isVerified === "" ||
      file === null
    ) {
      setFormUserIsEmpty(true);
    }
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      phone !== "" &&
      isVerified !== "" &&
      file !== null
    ) {
      setFormUserIsEmpty(false);
    }
  }, [email, file, firstName, isVerified, lastName, phone]);

  React.useEffect(() => {
    if (nome === "" || descricao === "" || idCategoria === "" || preco === "") {
      setFormProductIsEmpty(true);
    }

    if (nome !== "" && descricao !== "" && idCategoria !== "" && preco !== "") {
      setFormProductIsEmpty(false);
    }
  }, [nome, descricao, idCategoria, preco]);

  if (slug === "user") {
    return (
      <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black/75 z-[99]">
        <div
          className={`w-[80%] xl:w-[50%] rounded-lg p-7 bg-base-100 relative transition duration-300 flex flex-col items-stretch gap-5 ${
            showModal ? "translate-y-0" : "translate-y-full"
          }
            ${showModal ? "opacity-100" : "opacity-0"}`}
        >
          <div className="w-full flex justify-between pb-5 border-b border-base-content border-opacity-30">
            <button
              onClick={() => {
                setShowModal(false);
                setIsOpen(false);
              }}
              className="absolute top-5 right-3 btn btn-ghost btn-circle"
            >
              <HiOutlineXMark className="text-xl font-bold" />
            </button>
            <span className="text-2xl font-bold">Add new {slug}</span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered w-full"
              name="firstName"
              id="firstName"
              onChange={(element) => setFirstName(element.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered w-full"
              name="lastName"
              id="lastName"
              onChange={(element) => setLastName(element.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              name="email"
              id="email"
              onChange={(element) => setEmail(element.target.value)}
            />
            <input
              type="text"
              placeholder="Phone"
              className="input input-bordered w-full"
              name="phone"
              id="phone"
              onChange={(element) => setPhone(element.target.value)}
            />
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Verified Status</span>
              </div>
              <select
                className="select select-bordered"
                name="isVerified"
                id="isVerified"
                onChange={(element) => setIsVerified(element.target.value)}
              >
                <option disabled selected>
                  Select one
                </option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Pick a profile photo</span>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                onChange={loadImage}
              />
            </label>
            {preview && preview !== "" && (
              <div className="w-full flex flex-col items-start gap-3">
                <span>Profile Preview</span>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={preview} alt="profile-upload" />
                  </div>
                </div>
              </div>
            )}
            <button
              className={`mt-5 btn ${
                formUserIsEmpty ? "btn-disabled" : "btn-primary"
              } btn-block col-span-full font-semibold`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (slug === "product") {
    return (
      <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black/75 z-[99]">
        <div
          className={`w-[80%] xl:w-[50%] rounded-lg p-7 bg-base-100 relative transition duration-300 flex flex-col items-stretch gap-5 ${
            showModal ? "translate-y-0" : "translate-y-full"
          }
            ${showModal ? "opacity-100" : "opacity-0"}`}
        >
          <div className="w-full flex justify-between pb-5 border-b border-base-content border-opacity-30">
            <button
              onClick={() => {
                setShowModal(false);
                setIsOpen(false);
              }}
              className="absolute top-5 right-3 btn btn-ghost btn-circle"
            >
              <HiOutlineXMark className="text-xl font-bold" />
            </button>
            <span className="text-2xl font-bold">Add new {slug}</span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            <input
              type="text"
              placeholder="Nome do Produto"
              className="input input-bordered w-full"
              name="nome"
              id="nome"
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="text"
              placeholder="Descrição"
              className="input input-bordered w-full"
              name="descricao"
              id="descricao"
              onChange={(e) => setDescricao(e.target.value)}
            />
            <input
              type="text"
              placeholder="ID da Categoria"
              className="input input-bordered w-full"
              name="idCategoria"
              id="idCategoria"
              onChange={(e) => setIdCategoria(e.target.value)}
            />
            <input
              type="text"
              placeholder="Preço"
              className="input input-bordered w-full"
              name="preco"
              id="preco"
              onChange={(e) => setPreco(e.target.value)}
            />
            <button
              className={`mt-5 btn ${
                formProductIsEmpty ? "btn-disabled" : "btn-primary"
              } btn-block col-span-full font-semibold`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  return null;
};

export default AddData;
