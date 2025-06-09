<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VendaProduto extends Model
{
    protected $fillable = [
        "idVenda",
        "idProduto",
        "quantidade",
        "precoUnitario",
    ];

    public function venda()
    {
        return $this->belongsTo(Venda::class, "idVenda");
    }
    public function produto()
    {
        return $this->belongsTo(Produto::class, "idProduto");
    }
}
