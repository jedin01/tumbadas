<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Saida extends Model
{
    protected $fillable = ['idProduto','quantidade','data'];

    public function produto() { return $this->belongsTo(Produto::class, 'idProduto'); }
}
