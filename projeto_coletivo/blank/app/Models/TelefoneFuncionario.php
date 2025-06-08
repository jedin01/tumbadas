<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class TelefoneFuncionario extends Model
{
protected $fillable = ['idFuncionario','numeroTelefone'];

    public function funcionario() { return $this->belongsTo(Funcionario::class, 'idFuncionario'); }
}
