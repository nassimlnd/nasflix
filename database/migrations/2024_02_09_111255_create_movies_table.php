<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->string('tvg_id')->nullable();
            $table->string('tvg_name')->nullable();
            $table->string('tvg_logo')->nullable();
            $table->string('group_title')->nullable();
            $table->string('title');
            $table->string('url');
            $table->string('state')->default('non-available');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movies');
    }
};
