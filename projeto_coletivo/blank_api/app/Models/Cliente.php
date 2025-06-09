<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $fillable = ["pNome", "uNome", "municipio", "bairro"];

    //

    public function vendas()
    {
        return $this->hasMany(Venda::class, "idCliente");
    }
}
