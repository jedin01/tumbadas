#!/bin/bash

entities=(
  "Funcionario:pNome,uNome,email,municipio,bairro"
  "TelefoneFuncionario:idFuncionario,numeroTelefone"
  "Cliente:pNome,uNome,municipio,bairro"
  "TelefoneCliente:idCliente,numeroTelefone"
  "Fornecedor:pNome,uNome,municipio,bairro"
  "TelefoneFornecedor:idFornecedor,numeroTelefone"
  "Categoria:nome,descricao"
  "Produto:nome,descricao,idCategoria,preco"
  "Estoque:idProduto,quantidade,quantidadeVendida"
  "Entrada:idProduto,idFornecedor,quantidade,data"
  "Saida:idProduto,quantidade,data"
  "Venda:idFuncionario,idCliente,investimento,valorTotal,troco,data"
  "VendaProduto:idVenda,idProduto,quantidade,precoUnitario"
)

echo "===> Gerando models, migrations e controllers..."
for entity in "${entities[@]}"; do
  IFS=":" read -r name fields <<< "$entity"
  php artisan make:model "$name" -mcr || exit 1
done

echo "===> Adicionando fillable e SoftDeletes..."
for entity in "${entities[@]}"; do
  IFS=":" read -r name fields <<< "$entity"
  model="app/Models/${name}.php"

  # Adiciona SoftDeletes no model
  sed -i "/use HasFactory;/a\\
use Illuminate\\\\Database\\\\Eloquent\\\\SoftDeletes;" "$model"

  sed -i "/HasFactory,/a\\
    use SoftDeletes;" "$model"

  # Adiciona fillable
  fillable=$(echo "$fields" | sed "s/,/','/g")
  sed -i "/class $name extends Model/a\\
    protected \\\$fillable = ['$fillable'];" "$model"

  # Relacionamentos
  case "$name" in
    Funcionario)
      echo -e "\n    public function vendas() { return \$this->hasMany(Venda::class, 'idFuncionario'); }" >> "$model"
      ;;
    Cliente)
      echo -e "\n    public function vendas() { return \$this->hasMany(Venda::class, 'idCliente'); }" >> "$model"
      ;;
    Fornecedor)
      echo -e "\n    public function entradas() { return \$this->hasMany(Entrada::class, 'idFornecedor'); }" >> "$model"
      ;;
    Produto)
      echo -e "\n    public function categoria() { return \$this->belongsTo(Categoria::class, 'idCategoria'); }
    public function estoque() { return \$this->hasOne(Estoque::class, 'idProduto'); }
    public function entradas() { return \$this->hasMany(Entrada::class, 'idProduto'); }
    public function saidas() { return \$this->hasMany(Saida::class, 'idProduto'); }" >> "$model"
      ;;
    Categoria)
      echo -e "\n    public function produtos() { return \$this->hasMany(Produto::class, 'idCategoria'); }" >> "$model"
      ;;
    TelefoneFuncionario)
      echo -e "\n    public function funcionario() { return \$this->belongsTo(Funcionario::class, 'idFuncionario'); }" >> "$model"
      ;;
    TelefoneCliente)
      echo -e "\n    public function cliente() { return \$this->belongsTo(Cliente::class, 'idCliente'); }" >> "$model"
      ;;
    TelefoneFornecedor)
      echo -e "\n    public function fornecedor() { return \$this->belongsTo(Fornecedor::class, 'idFornecedor'); }" >> "$model"
      ;;
    Estoque)
      echo -e "\n    public function produto() { return \$this->belongsTo(Produto::class, 'idProduto'); }" >> "$model"
      ;;
    Entrada)
      echo -e "\n    public function produto() { return \$this->belongsTo(Produto::class, 'idProduto'); }
    public function fornecedor() { return \$this->belongsTo(Fornecedor::class, 'idFornecedor'); }" >> "$model"
      ;;
    Saida)
      echo -e "\n    public function produto() { return \$this->belongsTo(Produto::class, 'idProduto'); }" >> "$model"
      ;;
    Venda)
      echo -e "\n    public function funcionario() { return \$this->belongsTo(Funcionario::class, 'idFuncionario'); }
    public function cliente() { return \$this->belongsTo(Cliente::class, 'idCliente'); }
    public function itens() { return \$this->hasMany(VendaProduto::class, 'idVenda'); }" >> "$model"
      ;;
    VendaProduto)
      echo -e "\n    public function venda() { return \$this->belongsTo(Venda::class, 'idVenda'); }
    public function produto() { return \$this->belongsTo(Produto::class, 'idProduto'); }" >> "$model"
      ;;
  esac
done

echo "===> Adicionando SoftDeletes às migrations..."
find database/migrations -type f -name "*.php" | while read -r file; do
  sed -i "/Schema::create/a\\
            \$table->softDeletes();" "$file"
done

echo -e "\n✅ Tudo pronto!"
echo "👉 Agora rode:"
echo "   php artisan migrate"
