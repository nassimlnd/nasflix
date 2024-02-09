<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Movie;

class DashboardController extends Controller
{
    public function index()
    {
        $moviesArray = Movie::all();

        return Inertia::render('Dashboard', [
            'user' => auth()->user(),
            'data' => $moviesArray,
        ]);
    }
}
