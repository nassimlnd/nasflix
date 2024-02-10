<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Movie;

class PlayerController extends Controller
{
    public function index(string $id)
    {
        $movie = Movie::find($id);

        return Inertia::render('Player/Player', [
            'user' => auth()->user(),
            'movie' => $movie,
        ]);
    }
}
