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
        Schema::create('telefone_clientes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('idCliente')->constrained('clientes')->onDelete('cascade');
            $table->string('numeroTelefone');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('telefone_clientes');
    }
};
