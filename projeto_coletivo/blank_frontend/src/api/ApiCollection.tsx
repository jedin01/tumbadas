import axios from "axios";

// GET TOP DEALS
export const fetchTopDeals = async () => {
  const response = await axios
    .get("https://react-admin-ui-v1-api.vercel.app/topdeals")
    .then((res) => {
      console.log("axios get:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET TOTAL USERS
export const fetchTotalUsers = async () => {
  const response = await axios
    .get("https://react-admin-ui-v1-api.vercel.app/totalusers")
    .then((res) => {
      console.log("axios get:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET TOTAL PRODUCTS
export const fetchTotalProducts = async () => {
  const response = await axios
    .get("https://react-admin-ui-v1-api.vercel.app/totalproducts")
    .then((res) => {
      console.log("axios get:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET TOTAL RATIO
export const fetchTotalRatio = async () => {
  const response = await axios
    .get("https://react-admin-ui-v1-api.vercel.app/totalratio")
    .then((res) => {
      console.log("axios get:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET TOTAL REVENUE
export const fetchTotalRevenue = async () => {
  const response = await axios
    .get("https://react-admin-ui-v1-api.vercel.app/totalrevenue")
    .then((res) => {
      console.log("axios get:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET TOTAL SOURCE
export const fetchTotalSource = async () => {
  const response = await axios
    .get("https://react-admin-ui-v1-api.vercel.app/totalsource")
    .then((res) => {
      console.log("axios get:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET TOTAL VISIT
export const fetchTotalVisit = async () => {
  const response = await axios
    .get("https://react-admin-ui-v1-api.vercel.app/totalvisit")
    .then((res) => {
      console.log("axios get:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET TOTAL REVENUE BY PRODUCTS
export const fetchTotalRevenueByProducts = async () => {
  const response = await axios
    .get("https://react-admin-ui-v1-api.vercel.app/totalrevenue-by-product")
    .then((res) => {
      console.log("axios get:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET TOTAL PROFIT
export const fetchTotalProfit = async () => {
  const response = await axios
    .get("https://react-admin-ui-v1-api.vercel.app/totalprofit")
    .then((res) => {
      console.log("axios get:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET ALL USERS
export const fetchUsers = async () => {
  const response = await axios
    .get("https://react-admin-ui-v1-api.vercel.app/users")
    .then((res) => {
      console.log("axios get:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET SINGLE USER
export const fetchSingleUser = async (id: string) => {
  const response = await axios
    .get(`https://react-admin-ui-v1-api.vercel.app/users/${id}`)
    .then((res) => {
      console.log("axios get:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET ALL PRODUCTS
export const fetchProducts = async () => {
  const response = await axios
    .get("http://127.0.0.1:8000/api/produtos")
    .then((res) => {
      console.log("axios get:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET SINGLE PRODUCT
export const fetchSingleProduct = async (id: string) => {
  const response = await axios
    .get(`http://127.0.0.1:8000/api/produtos/${id}`)
    .then((res) => {
      console.log("axios get:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET ALL ORDERS
export const fetchOrders = async () => {
  const response = await axios
    .get("https://react-admin-ui-v1-api.vercel.app/orders")
    .then((res) => {
      console.log("axios get:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET ALL POSTS
export const fetchPosts = async () => {
  const response = await axios
    .get("https://react-admin-ui-v1-api.vercel.app/posts")
    .then((res) => {
      console.log("axios get:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET ALL NOTES
export const fetchNotes = async () => {
  const response = await axios
    .get(`https://react-admin-ui-v1-api.vercel.app/notes?q=`)
    .then((res) => {
      console.log("axios get:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET ALL LOGS
export const fetchLogs = async () => {
  const response = await axios
    .get(`https://react-admin-ui-v1-api.vercel.app/logs`)
    .then((res) => {
      console.log("axios get:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

export const fetchFuncionarios = async () => {
  const response = await axios
    .get("http://127.0.0.1:8000/api/funcionarios")
    .then((res) => {
      console.log("axios get funcionarios:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  return response;
};

// GET TELEFONE FUNCIONARIOS
export const fetchTelefoneFuncionarios = async () => {
  const response = await axios
    .get("https://react-admin-ui-v1-api.vercel.app/telefonefuncionarios")
    .then((res) => {
      console.log("axios get telefoneFuncionarios:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  return response;
};

// GET CLIENTES
export const fetchClientes = async () => {
  const response = await axios
    .get("http://127.0.0.1:8000/api/clientes")
    .then((res) => {
      console.log("axios get clientes:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  return response;
};

// GET TELEFONE CLIENTES
export const fetchTelefoneClientes = async () => {
  const response = await axios
    .get("https://react-admin-ui-v1-api.vercel.app/telefoneclientes")
    .then((res) => {
      console.log("axios get telefoneClientes:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  return response;
};

// GET FORNECEDORES
export const fetchFornecedores = async () => {
  const response = await axios
    .get("http://127.0.0.1:8000/api/fornecedores")
    .then((res) => {
      console.log("axios get fornecedores:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  return response;
};

// GET TELEFONE FORNECEDORES
export const fetchTelefoneFornecedores = async () => {
  const response = await axios
    .get("https://react-admin-ui-v1-api.vercel.app/telefonefornecedores")
    .then((res) => {
      console.log("axios get telefoneFornecedores:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  return response;
};

// GET CATEGORIAS
export const fetchCategorias = async () => {
  const response = await axios
    .get("http://127.0.0.1:8000/api/categorias")
    .then((res) => {
      console.log("axios get categorias:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  return response;
};

// GET ESTOQUES
export const fetchEstoques = async () => {
  const response = await axios
    .get("http://127.0.0.1:8000/api/estoques")
    .then((res) => {
      console.log("axios get estoques:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  return response;
};

// GET ENTRADAS
export const fetchEntradas = async () => {
  const response = await axios
    .get("http://127.0.0.1:8000/api/entradas")
    .then((res) => {
      console.log("axios get entradas:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  return response;
};

// GET SAIDAS
export const fetchSaidas = async () => {
  const response = await axios
    .get("http://127.0.0.1:8000/api/saidas")
    .then((res) => {
      console.log("axios get saidas:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  return response;
};

// GET VENDAS
export const fetchVendas = async () => {
  const response = await axios
    .get("http://127.0.0.1:8000/api/vendas")
    .then((res) => {
      console.log("axios get vendas:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  return response;
};

// GET VENDA PRODUTO
export const fetchVendaProduto = async () => {
  const response = await axios
    .get("http://127.0.0.1:8000/api/vendaproduto")
    .then((res) => {
      console.log("axios get vendaProduto:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  return response;
};

export const fetchSingleFuncionario = async (id: string) => {
  const response = await axios
    .get(`http://127.0.0.1:8000/api/funcionarios/${id}`)
    .then((res) => {
      console.log("axios get funcionario:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

export const fetchSingleCliente = async (id: string) => {
  const response = await axios
    .get(`http://127.0.0.1:8000/api/clientes/${id}`)
    .then((res) => {
      console.log("axios get cliente:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

export const fetchSingleFornecedor = async (id: string) => {
  const response = await axios
    .get(`http://127.0.0.1:8000/api/fornecedores/${id}`)
    .then((res) => {
      console.log("axios get fornecedor:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

export const fetchSingleCategoria = async (id: string) => {
  const response = await axios
    .get(`http://127.0.0.1:8000/api/categorias/${id}`)
    .then((res) => {
      console.log("axios get categoria:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

export const fetchSingleEstoque = async (id: string) => {
  const response = await axios
    .get(`http://127.0.0.1:8000/api/estoques/${id}`)
    .then((res) => {
      console.log("axios get estoque:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

export const fetchSingleEntrada = async (id: string) => {
  const response = await axios
    .get(`http://127.0.0.1:8000/api/entradas/${id}`)
    .then((res) => {
      console.log("axios get entrada:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

export const fetchSingleSaida = async (id: string) => {
  const response = await axios
    .get(`http://127.0.0.1:8000/api/saidas/${id}`)
    .then((res) => {
      console.log("axios get saida:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

export const fetchSingleVenda = async (id: string) => {
  const response = await axios
    .get(`http://127.0.0.1:8000/api/vendas/${id}`)
    .then((res) => {
      console.log("axios get venda:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};
