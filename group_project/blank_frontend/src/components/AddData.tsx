import React, { ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import { HiOutlineXMark } from "react-icons/hi2";

interface AddDataProps {
  slug: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddData: React.FC<AddDataProps> = ({ slug, isOpen, setIsOpen }) => {
  const [showModal, setShowModal] = React.useState(false);

  // Campos comuns e específicos

  // Usuário
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [isVerified, setIsVerified] = React.useState("");
  const [file, setFile] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);

  // Produto
  const [nome, setNome] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [idCategoria, setIdCategoria] = React.useState("");
  const [preco, setPreco] = React.useState("");

  // Fornecedor e Cliente (nome, email, telefone, endereço)
  const [nomePessoa, setNomePessoa] = React.useState("");
  const [emailPessoa, setEmailPessoa] = React.useState("");
  const [telefonePessoa, setTelefonePessoa] = React.useState("");
  const [enderecoPessoa, setEnderecoPessoa] = React.useState("");

  // Categoria
  const [nomeCategoria, setNomeCategoria] = React.useState("");
  const [descricaoCategoria, setDescricaoCategoria] = React.useState("");

  // Estoque (produto, quantidade)
  const [produtoId, setProdutoId] = React.useState("");
  const [quantidade, setQuantidade] = React.useState("");

  // Entrada e Saída (produto, quantidade, fornecedor/cliente)
  const [fornecedorId, setFornecedorId] = React.useState("");
  const [clienteId, setClienteId] = React.useState("");
  // Funcionário
  const [nomeFuncionario, setNomeFuncionario] = React.useState("");
  const [sobrenomeFuncionario, setSobrenomeFuncionario] = React.useState("");
  const [emailFuncionario, setEmailFuncionario] = React.useState("");
  const [telefoneFuncionario, setTelefoneFuncionario] = React.useState("");
  const [municipioFuncionario, setMunicipioFuncionario] = React.useState("");
  const [bairroFuncionario, setBairroFuncionario] = React.useState("");

  // Entradas
  const [produtoEntrada, setProdutoEntrada] = React.useState("");
  const [quantidadeEntrada, setQuantidadeEntrada] = React.useState<number>(0);
  const [dataEntrada, setDataEntrada] = React.useState("");

  // Saídas
  const [produtoSaida, setProdutoSaida] = React.useState("");
  const [quantidadeSaida, setQuantidadeSaida] = React.useState<number>(0);
  const [dataSaida, setDataSaida] = React.useState("");

  // Estoques
  const [produtoEstoque, setProdutoEstoque] = React.useState("");
  const [quantidadeEstoque, setQuantidadeEstoque] = React.useState<number>(0);
  const [quantidadeVendida, setQuantidadeVendida] = React.useState<number>(0);

  // Lista de produtos para selects (você precisa passar ou buscar produtos)
  const [produtos, setProdutos] = React.useState<
    Array<{ id: string; nome: string }>
  >([]);

  // Validações simples para habilitar submit
  const [formEmpty, setFormEmpty] = React.useState(true);

  React.useEffect(() => {
    let empty = true;
    switch (slug) {
      case "user":
        empty =
          !firstName.trim() ||
          !lastName.trim() ||
          !email.trim() ||
          !phone.trim() ||
          !isVerified.trim() ||
          !file;
        break;

      case "product":
        empty =
          !nome.trim() ||
          !descricao.trim() ||
          !idCategoria.trim() ||
          !preco.trim();
        break;

      case "fornecedor":
      case "cliente":
        empty =
          !nomePessoa.trim() ||
          !emailPessoa.trim() ||
          !telefonePessoa.trim() ||
          !enderecoPessoa.trim();
        break;

      case "categoria":
        empty = !nomeCategoria.trim() || !descricaoCategoria.trim();
        break;

      case "estoques":
        empty = !produtoId.trim() || !quantidade.trim();
        break;

      case "entrada":
        empty = !produtoId.trim() || !quantidade.trim() || !fornecedorId.trim();
        break;

      case "saida":
        empty = !produtoId.trim() || !quantidade.trim() || !clienteId.trim();
        break;

      default:
        empty = true;
        break;
    }
    setFormEmpty(empty);
  }, [
    slug,
    firstName,
    lastName,
    email,
    phone,
    isVerified,
    file,
    nome,
    descricao,
    idCategoria,
    preco,
    nomePessoa,
    emailPessoa,
    telefonePessoa,
    enderecoPessoa,
    nomeCategoria,
    descricaoCategoria,
    produtoId,
    quantidade,
    fornecedorId,
    clienteId,
  ]);

  React.useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  // Preview imagem
  const loadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUpload = e.target.files[0];
      setFile(imageUpload);
      setPreview(URL.createObjectURL(imageUpload));
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setIsOpen(false);

    // Reset all fields on close
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setIsVerified("");
    setFile(null);
    setPreview(null);

    setNome("");
    setDescricao("");
    setIdCategoria("");
    setPreco("");

    setNomePessoa("");
    setEmailPessoa("");
    setTelefonePessoa("");
    setEnderecoPessoa("");

    setNomeCategoria("");
    setDescricaoCategoria("");

    setProdutoId("");
    setQuantidade("");
    setFornecedorId("");
    setClienteId("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let url = "";
      let options: RequestInit = {};

      switch (slug) {
        case "user":
          url = "http://localhost:8000/api/users";
          const formData = new FormData();
          formData.append("firstName", firstName);
          formData.append("lastName", lastName);
          formData.append("email", email);
          formData.append("phone", phone);
          formData.append("isVerified", isVerified);
          if (file) formData.append("profilePhoto", file);
          options = { method: "POST", body: formData };
          break;

        case "product":
          url = "http://localhost:8000/api/produtos";
          options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              nome,
              descricao,
              idCategoria,
              preco: parseFloat(preco),
            }),
          };
          break;

        case "fornecedor":
          url = "http://localhost:8000/api/fornecedores";
          options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              nome: nomePessoa,
              email: emailPessoa,
              telefone: telefonePessoa,
              endereco: enderecoPessoa,
            }),
          };
          break;

        case "cliente":
          url = "http://localhost:8000/api/clientes";
          options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              nome: nomePessoa,
              email: emailPessoa,
              telefone: telefonePessoa,
              endereco: enderecoPessoa,
            }),
          };
          break;

        case "categoria":
          url = "http://localhost:8000/api/categorias";
          options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              nome: nomeCategoria,
              descricao: descricaoCategoria,
            }),
          };
          break;

        case "estoques":
          url = "http://localhost:8000/api/estoques";
          options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              produtoId,
              quantidade: parseInt(quantidade),
            }),
          };
          break;

        case "funcionario":

        case "entrada":
          url = "http://localhost:8000/api/entradas";
          options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              produtoId,
              quantidade: parseInt(quantidade),
              fornecedorId,
            }),
          };
          break;

        case "saida":
          url = "http://localhost:8000/api/saidas";
          options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              produtoId,
              quantidade: parseInt(quantidade),
              clienteId,
            }),
          };
          break;

        default:
          toast.error("Tipo não suportado.");
          return;
      }

      const response = await fetch(url, options);

      if (!response.ok) throw new Error("Erro ao salvar dados.");

      toast.success(
        `${slug.charAt(0).toUpperCase() + slug.slice(1)} adicionado com sucesso!`,
      );
      handleClose();
    } catch (error) {
      console.error(error);
      toast.error("Erro ao salvar dados.");
    }
  };

  if (!showModal) return null;

  // Render forms de acordo com slug
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black/75 z-[99]">
      <div className="w-[80%] xl:w-[50%] rounded-lg p-7 bg-base-100 relative transition duration-300 flex flex-col gap-5">
        <div className="w-full flex justify-between pb-5 border-b border-base-content border-opacity-30">
          <button
            onClick={handleClose}
            className="absolute top-5 right-3 btn btn-ghost btn-circle"
            aria-label="Close modal"
          >
            <HiOutlineXMark className="text-xl font-bold" />
          </button>
          <span className="text-2xl font-bold capitalize">
            Adicionar novo {slug}
          </span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
          {/* Usuário */}
          {slug === "user" && (
            <>
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full col-span-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="input input-bordered w-full"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <select
                className="select select-bordered w-full"
                value={isVerified}
                onChange={(e) => setIsVerified(e.target.value)}
                required
              >
                <option value="" disabled>
                  Verification Status
                </option>
                <option value="true">Verified</option>
                <option value="false">Not Verified</option>
              </select>
              <div className="col-span-2">
                <label className="block mb-1 font-semibold">
                  Profile Photo
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={loadImage}
                  required
                />
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="mt-2 max-h-40 rounded-md object-cover"
                  />
                )}
              </div>
            </>
          )}

          {/* Produto */}
          {slug === "product" && (
            <>
              <input
                type="text"
                placeholder="Nome do Produto"
                className="input input-bordered w-full"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Descrição"
                className="input input-bordered w-full"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="ID da Categoria"
                className="input input-bordered w-full"
                value={idCategoria}
                onChange={(e) => setIdCategoria(e.target.value)}
                required
              />
              <input
                type="number"
                step="0.01"
                placeholder="Preço"
                className="input input-bordered w-full"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                required
              />
            </>
          )}

          {/* Fornecedor e Cliente */}
          {(slug === "fornecedor" || slug === "cliente") && (
            <>
              <input
                type="text"
                placeholder="Nome"
                className="input input-bordered w-full"
                value={nomePessoa}
                onChange={(e) => setNomePessoa(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                value={emailPessoa}
                onChange={(e) => setEmailPessoa(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Telefone"
                className="input input-bordered w-full"
                value={telefonePessoa}
                onChange={(e) => setTelefonePessoa(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Endereço"
                className="input input-bordered w-full"
                value={enderecoPessoa}
                onChange={(e) => setEnderecoPessoa(e.target.value)}
                required
              />
            </>
          )}

          {/* Categoria */}
          {slug === "categoria" && (
            <>
              <input
                type="text"
                placeholder="Nome da Categoria"
                className="input input-bordered w-full"
                value={nomeCategoria}
                onChange={(e) => setNomeCategoria(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Descrição da Categoria"
                className="input input-bordered w-full"
                value={descricaoCategoria}
                onChange={(e) => setDescricaoCategoria(e.target.value)}
                required
              />
            </>
          )}

          {/* Estoques */}
          {slug === "estoques" && (
            <>
              <input
                type="text"
                placeholder="Produto ID"
                className="input input-bordered w-full"
                value={produtoId}
                onChange={(e) => setProdutoId(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Quantidade"
                className="input input-bordered w-full"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                required
              />
            </>
          )}

          {slug === "funcionario" && (
            <>
              <input
                type="text"
                placeholder="pnome"
                className="input input-bordered w-full"
                value={nomeFuncionario}
                onChange={(e) => setNomeFuncionario(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="unome"
                className="input input-bordered w-full"
                value={sobrenomeFuncionario}
                onChange={(e) => setSobrenomeFuncionario(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="email"
                className="input input-bordered w-full"
                value={emailFuncionario}
                onChange={(e) => setEmailFuncionario(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="municipio"
                className="input input-bordered w-full"
                value={municipioFuncionario}
                onChange={(e) => setMunicipioFuncionario(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="bairro"
                className="input input-bordered w-full"
                value={bairroFuncionario}
                onChange={(e) => setBairroFuncionario(e.target.value)}
                required
              />

              {/* demais inputs do funcionário */}
            </>
          )}

          {slug === "entrada" && (
            <>
              <select
                className="select select-bordered w-full"
                value={produtoEntrada}
                onChange={(e) => setProdutoEntrada(e.target.value)}
                required
              >
                <option value="">Selecione o Produto</option>
                {produtos.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nome}
                  </option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Quantidade"
                className="input input-bordered w-full"
                value={quantidadeEntrada}
                onChange={(e) => setQuantidadeEntrada(Number(e.target.value))}
                required
              />
              <input
                type="date"
                className="input input-bordered w-full"
                value={dataEntrada}
                onChange={(e) => setDataEntrada(e.target.value)}
                required
              />
            </>
          )}

          {slug === "saida" && (
            <>
              <select
                className="select select-bordered w-full"
                value={produtoSaida}
                onChange={(e) => setProdutoSaida(e.target.value)}
                required
              >
                <option value="">Selecione o Produto</option>
                {produtos.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nome}
                  </option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Quantidade"
                className="input input-bordered w-full"
                value={quantidadeSaida}
                onChange={(e) => setQuantidadeSaida(Number(e.target.value))}
                required
              />
              <input
                type="date"
                className="input input-bordered w-full"
                value={dataSaida}
                onChange={(e) => setDataSaida(e.target.value)}
                required
              />
            </>
          )}

          {slug === "estoque" && (
            <>
              <select
                className="select select-bordered w-full"
                value={produtoEstoque}
                onChange={(e) => setProdutoEstoque(e.target.value)}
                required
              >
                <option value="">Selecione o Produto</option>
                {produtos.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nome}
                  </option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Quantidade em Estoque"
                className="input input-bordered w-full"
                value={quantidadeEstoque}
                onChange={(e) => setQuantidadeEstoque(Number(e.target.value))}
                required
              />
              <input
                type="number"
                placeholder="Quantidade Vendida"
                className="input input-bordered w-full"
                value={quantidadeVendida}
                onChange={(e) => setQuantidadeVendida(Number(e.target.value))}
                required
              />
            </>
          )}

          <button
            disabled={formEmpty}
            type="submit"
            className={`btn col-span-full ${formEmpty ? "btn-disabled" : "btn-primary"}`}
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddData;
