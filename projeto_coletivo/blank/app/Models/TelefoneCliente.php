<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TelefoneCliente extends Model
    protected $fillable = ['idCliente','numeroTelefone'];
{
    //
}

    public function cliente() { return $this->belongsTo(Cliente::class, 'idCliente'); }
