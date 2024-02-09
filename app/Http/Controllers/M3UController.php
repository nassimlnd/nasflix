<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\M3UDataImportService;
use App\Models\Movie;
use App\Models\Serie;
use App\Models\TvShow;

class M3UController extends Controller
{
    public function store(Request $request)
    {
        /*$request->validate([
            'm3u' => 'required|file|mimetypes:application/x-mpegURL',
        ]);*/

        $file = $request->file('m3ufile');

        // Import the data from the file
        $importer = new M3UDataImportService($file);
        $importer->parseContent();

        // Save the movies to the database
        $movies = $importer->getMovies();
        foreach ($movies as $movie) {
            $newMovie = new Movie();
            $newMovie->tvg_id = $movie['tvg-id'] ?? '';
            $newMovie->tvg_name = $movie['tvg-name'] ?? '';
            $newMovie->tvg_logo = $movie['tvg-logo'] ?? '';
            $newMovie->group_title = $movie['group-title'] ?? '';
            $newMovie->title = $movie['title'] ?? '';
            $newMovie->url = $movie['url'] ?? '';
            $newMovie->save();
        }

        // Save the series to the database
        /*$series = $importer->getSeries();
        foreach ($series as $serie) {
            $newSeries = new Serie();
            $newSeries->tvg_id = $serie['tvg-id'] ?? '';
            $newSeries->tvg_name = $serie['tvg-name'] ?? '';
            $newSeries->tvg_logo = $serie['tvg-logo'] ?? '';
            $newSeries->group_title = $serie['group-title'] ?? '';
            $newSeries->title = $serie['title'] ?? '';
            $newSeries->url = $serie['url'] ?? '';
            $newSeries->save();
        }*/

        // Save the tv shows to the database
        /*$tvShows = $importer->getTvShows();
        foreach ($tvShows as $tvShow) {
            $newTvShow = new TvShow();
            $newTvShow->tvg_id = $tvShow['tvg-id'] ?? '';
            $newTvShow->tvg_name = $tvShow['tvg-name'] ?? '';
            $newTvShow->tvg_logo = $tvShow['tvg-logo'] ?? '';
            $newTvShow->group_title = $tvShow['group-title'] ?? '';
            $newTvShow->title = $tvShow['title'] ?? '';
            $newTvShow->url = $tvShow['url'] ?? '';
            $newTvShow->save();
        }*/

        return redirect()->route('profile.settings.m3u')->with('success', 'The M3U file has been imported successfully');
    }
}
