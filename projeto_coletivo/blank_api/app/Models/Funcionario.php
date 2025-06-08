<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Funcionario extends Model
{
    protected $fillable = ["pNome", "uNome", "email", "municipio", "bairro"];

    public function vendas()
    {
        return $this->hasMany(Venda::class, "idFuncionario");
    }
}
