<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
     public function up()
     {
         Schema::create('vendas', function (Blueprint $table) {
             $table->id();
             $table->foreignId('idFuncionario')->constrained('funcionarios')->onDelete('cascade');
             $table->foreignId('idCliente')->constrained('clientes')->onDelete('cascade');
             $table->decimal('investimento', 10, 2)->default(0);
             $table->decimal('valorTotal', 10, 2);
             $table->decimal('troco', 10, 2)->default(0);
             $table->date('data');
             $table->timestamps();
             $table->softDeletes();
         });
     }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vendas');
    }
};
