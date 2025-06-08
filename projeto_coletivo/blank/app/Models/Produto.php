<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Produto extends Model
{
    protected $fillable = ['nome','descricao','idCategoria','preco'];

    //


    public function categoria() { return $this->belongsTo(Categoria::class, 'idCategoria'); }
    public function estoque() { return $this->hasOne(Estoque::class, 'idProduto'); }
    public function entradas() { return $this->hasMany(Entrada::class, 'idProduto'); }
    public function saidas() { return $this->hasMany(Saida::class, 'idProduto'); }
}
