<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Categoria extends Model
{
    protected $fillable = ['nome','descricao'];

    public function produtos() { return $this->hasMany(Produto::class, 'idCategoria'); }
}
