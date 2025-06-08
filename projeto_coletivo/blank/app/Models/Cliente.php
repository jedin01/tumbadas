<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Cliente extends Model
{
    protected $fillable = ['pNome','uNome','municipio','bairro'];

    //


    public function vendas() { return $this->hasMany(Venda::class, 'idCliente'); }
}
