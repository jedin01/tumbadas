<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Saida extends Model
{
    protected $fillable = ["idProduto", "quantidade", "data"];

    public function produto()
    {
        return $this->belongsTo(Produto::class, "idProduto");
    }
}
