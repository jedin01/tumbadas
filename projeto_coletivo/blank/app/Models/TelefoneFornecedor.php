<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class TelefoneFornecedor extends Model
{
    protected $fillable = ['idFornecedor','numeroTelefone'];
    //
    public function fornecedor() { return $this->belongsTo(Fornecedor::class, 'idFornecedor'); }
}
