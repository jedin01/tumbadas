<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Fornecedor extends Model
{
    protected $table = "fornecedores";
    protected $fillable = ["pNome", "uNome", "municipio", "bairro"];

    //

    public function entradas()
    {
        return $this->hasMany(Entrada::class, "idFornecedor");
    }
}
