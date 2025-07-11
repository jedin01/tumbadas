<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Entrada extends Model
    protected $fillable = ['idProduto','idFornecedor','quantidade','data'];
{
    //
}

    public function produto() { return $this->belongsTo(Produto::class, 'idProduto'); }
    public function fornecedor() { return $this->belongsTo(Fornecedor::class, 'idFornecedor'); }
