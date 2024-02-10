<?php

namespace App\Http\Controllers;

use Http;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function downloadAndStore()
    {
        $url = "http://r365mail.biz:2103/movie/Cr5ZQUazyj/430866556543/38240.mkv";

        $fileName = "test";

        $destinationPath = public_path('movies/mkv/' . $fileName);

        exec("wget -O http://r365mail.biz:2103/movie/Cr5ZQUazyj/430866556543/38240.mkv -P \"$destinationPath\"", $output, $return);

        if ($return === 0 && file_exists($destinationPath)) {
            error_log("File downloaded successfully!");
        } else {
            error_log("File download failed!");
        }
    }
}
