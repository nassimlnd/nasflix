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

        $urlExploded = explode('/', $movie['url']);
        $fileName = end($urlExploded);

        if (!file_exists($fileName)) {
            $command = 'wget -c ' . $movie['url'] . " ";

            $status = 0;

            for ($i = 0; $i < 5; $i++) {
                exec($command, $output, $status);
                if ($status === 0) {
                    break;
                }
            }
        } elseif (file_exists($fileName . '.mp4')) {
            return response()->json(['message' => 'File already exists']);
        }

        $res = FileController::convertMkvToMp4($fileName);

        return response()->json(['message' => 'File downloaded and stored successfully' . $res]);
    }

    public function convertMkvToMp4(string $fileName)
    {
        /*$ffmpeg = FFMpeg::create();
        $video = $ffmpeg->open($fileName);
        error_log('Converting file ' . $fileName . ' to mp4');
        $video->save(new X264(), $fileName . '.mp4');
        error_log('File converted successfully');*/

        $command = 'ffmpeg -i ' . $fileName . ' -c ' . $fileName . '.mp4';

        error_log('Converting file ' . $fileName . ' to mp4');
        exec($command, $output, $status);
        error_log('File converted successfully');

        return 'File converted successfully';
    }
}
