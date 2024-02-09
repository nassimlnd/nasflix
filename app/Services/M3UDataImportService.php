<?php

namespace App\Services;

use App\Models\Movie;
use App\Models\TvShow;
use App\Models\Serie;

class M3UDataImportService
{
    private $fileContent;
    private $movies = [];

    private $series = [];

    private $tvShows = [];

    public function __construct(string $file)
    {
        $this->loadFile($file);
    }

    public function loadFile($file)
    {
        $content = file_get_contents($file);

        if ($content === false) {
            throw new \Exception('Unable to read the file');
        }

        $this->fileContent = $content;
    }

    public function getMovies()
    {
        return $this->movies;
    }

    public function getSeries()
    {
        return $this->series;
    }

    public function getTvShows()
    {
        return $this->tvShows;
    }

    public function getM3UContent()
    {
        return $this->fileContent;
    }


    public function parseContent()
    {
        // Parse the file content and extract the entries
        $lines = explode("\n", $this->fileContent);
        $currentEntry = null;

        foreach ($lines as $line) {
            // If the line is empty, skip it
            if (empty(trim($line))) {
                continue;
            }

            // If the line starts with #EXTINF, it's a new entry
            if (strpos($line, "#EXTINF") === 0) {
                $currentEntry = $this->parseInfoLine($line);
            }
            // If currentEntry is not null, it's an url
            elseif ($currentEntry !== null && !empty(trim($line))) {
                $currentEntry['url'] = trim($line);

                // Add the currentEntry to the correct array
                $mediaType = $this->parseMediaType($line);
                switch ($mediaType) {
                    case 'movie':
                        array_push($this->movies, $currentEntry);
                        break;
                    case 'series':
                        array_push($this->series, $currentEntry);
                        break;
                    case 'tvshow':
                        array_push($this->tvShows, $currentEntry);
                        break;
                }

                // Reset the currentEntry
                $currentEntry = null;
            }
        }

        return [
            'movies' => $this->movies,
            'series' => $this->series,
            'tvShows' => $this->tvShows
        ];
    }


    public function parseInfoLine(string $line)
    {
        // Extract the data from the line
        // Example: #EXTINF:-1 tvg-id="" tvg-name="Braquo (FR) HD S04 E05" tvg-logo="http://theking365tv.tv:2103/images/7e0c17e1256bc0dc259d4097bdb47060.jpg" group-title="ACTION",Braquo (FR) HD S04 E05

        /*$data = [];

        $parts = explode(',', $line, 2);
        $attributesPart = $parts[0];
        $title = $parts[1];

        $ex = explode('#EXTINF:-1', $parts[0]);
        //error_log(print_r($ex[1], true));

        $attributes = explode('=', $ex[1]);
        //error_log(print_r($attributes, true));

        $attrs = [];

        foreach ($attributes as $attribute) {
            $attr = explode('" ', $attribute);
            //error_log(print_r($attrs[0], true));
            $attrs[] = $attr[0];
        }*/

        $pattern = '/#EXTINF:-1 tvg-id="([^"]*)" tvg-name="([^"]*)" tvg-logo="([^"]*)" group-title="([^"]*)",([^"]*)/';
        preg_match($pattern, $line, $matches);

        // Les informations sont maintenant stockées dans le tableau $matches
        $data = [
            'tvg-id' => isset($matches[1]) ? $matches[1] : '', // Gère le cas où tvg-id est vide
            'tvg-name' => $matches[2],
            'tvg-logo' => $matches[3],
            'group-title' => $matches[4],
            'channel-name' => $matches[5]
        ];

        /*$data = [
            'tvg-id' => explode('"', $attrs[1])[1] ? explode('"', $attrs[1])[1] : "0",
            'tvg-name' => explode('"', $attrs[2])[1],
            'tvg-logo' => explode('"', $attrs[3])[1],
            'group-title' => explode('"', $attrs[4])[1],
            'title' => $title,
        ];*/

        //error_log(print_r($data['tvg-name'], true));

        return $data;

        /*$data = [
            'tvg-id' => $matches[1] || "",
            'tvg-name' => $matches[2],
            'tvg-logo' => $matches[3],
            'group-title' => $matches[4],
            'title' => $matches[5]
        ];*/

    }

    public function parseMediaType(string $url)
    {
        if (strpos($url, '/movie/') !== false) {
            return 'movie';
        } elseif (strpos($url, '/series/') !== false) {
            return 'series';
        } else {
            return 'tvshow';
        }
    }
}