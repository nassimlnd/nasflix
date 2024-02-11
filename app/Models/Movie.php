<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    use HasFactory;

    protected $fillable = [
        'tvg_id',
        'tvg_name',
        'tvg_logo',
        'group_title',
        'title',
        'url',
        'state'
    ];
}
