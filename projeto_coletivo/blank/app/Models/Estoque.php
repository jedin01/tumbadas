<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Estoque extends Model
{
    protected $fillable = ['idProduto','quantidade','quantidadeVendida'];
    //


    public function produto() { return $this->belongsTo(Produto::class, 'idProduto'); }
}
