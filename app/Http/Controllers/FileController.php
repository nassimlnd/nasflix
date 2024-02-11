<?php

namespace App\Http\Controllers;

use Http;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function downloadAndStore(Request $request)
    {
        // Get the media from the request
        $movie = $request->post('media');

        $command = 'wget -c ' . $movie['url'] . " -P /assets";

        $status = 0;

        for ($i = 0; $i < 5; $i++) {
            exec($command, $output, $status);
            if ($status === 0) {
                break;
            }
        }



        /*$fileName = basename($movie['url']);
        $path = storage_path('app/public/' . $fileName);

        file_put_contents($path, $file);*/
        return response()->json(['message' => 'File downloaded and stored successfully']);
    }
}
