<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Venda extends Model
    protected $fillable = ['idFuncionario','idCliente','investimento','valorTotal','troco','data'];
{
    //
}

    public function funcionario() { return $this->belongsTo(Funcionario::class, 'idFuncionario'); }
    public function cliente() { return $this->belongsTo(Cliente::class, 'idCliente'); }
    public function itens() { return $this->hasMany(VendaProduto::class, 'idVenda'); }
