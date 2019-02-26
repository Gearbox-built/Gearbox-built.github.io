<?php

namespace App\Controllers;

use Sober\Controller\Controller;
use App\Controllers\Interfaces\PostTypeInterface;

class TeamMember extends Controller implements PostTypeInterface
{
    use Partials\PostType;

    protected $template = 'single-team-member';
    protected $acf = true;

    /**
     * Return team member teaser field values.
     *
     * @param boolean $featured
     *
     * @return array
     */
    public static function teaser($featured = false)
    {
        $data = [
            'title'    => get_field('title'),
            'headshot' => get_field('headshot'),
            'featured' => $featured,
        ];

        return package($data);
    }

    /**
     * Return team member flyout field values.
     *
     * @return array
     */
    public static function flyout()
    {
        $data = [
            'title' => get_field('title'),
            'photo' => get_field('photo'),
            'bio'   => get_field('bio'),
        ];

        return package($data);
    }
}
