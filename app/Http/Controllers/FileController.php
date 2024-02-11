<?php

namespace App\Http\Controllers;

use FFMpeg\FFMpeg;
use FFMpeg\Format\Video\X264;
use Http;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function downloadAndStore(Request $request)
    {
        // Get the media from the request
        $movie = $request->post('media');

        $command = 'wget -c ' . $movie['url'] . " ";

        $status = 0;

        for ($i = 0; $i < 5; $i++) {
            exec($command, $output, $status);
            if ($status === 0) {
                break;
            }
        }

        $urlExploded = explode('/', $movie['url']);

        $fileName = end($urlExploded);

        FileController::convertMkvToMp4($fileName);

        return response()->json(['message' => 'File downloaded and stored successfully']);
    }

    public function convertMkvToMp4(string $fileName)
    {
        $ffmpeg = FFMpeg::create();
        $video = $ffmpeg->open($fileName);
        $video->save(new X264(), $fileName . '.mp4');

        return response()->json(['message' => 'File converted successfully']);
    }
}
