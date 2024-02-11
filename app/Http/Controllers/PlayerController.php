<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Movie;
use Illuminate\Support\Facades\Http;

class PlayerController extends Controller
{
    public function index(string $id)
    {
        $movie = Movie::find($id);
        $title = trim(explode('(', $movie->tvg_name)[0]);

        $res = Http::get('https://api.themoviedb.org/3/search/movie', [
            'api_key' => env('TMDB_API_KEY'),
            'query' => $title,
            'language' => 'fr-FR'
        ]);

        $data = $res->json();


        if (isset($data['results'][0])) {
            $data = $data['results'][0];
        } else {
            $data = null;
        }

        return Inertia::render('Media/MediaPlayer', [
            'user' => auth()->user(),
            'media' => $movie,
            'data' => $data
        ]);
    }
}
