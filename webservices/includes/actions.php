<?php
/**
 * @return array
 */
function getProducts()
{
    return [
        [
            "id" => 1,
            "name" => "Pindakaas",
            "category" => "Broodbeleg",
            "image" => "./images/pindakaas.jpg",
        ],
        [
            "id" => 2,
            "name" => "Boerenkool",
            "category" => "Groenten",
            "image" => "./images/boerenkool.jpg",
        ],
        [
            "id" => 3,
            "name" => "Tomaten",
            "category" => "Groenten",
            "image" => "./images/tomaten.jpg",
        ],
        [
            "id" => 4,
            "name" => "Kaas",
            "category" => "Zuivel",
            "image" => "./images/kaas.jpg",
        ],
        [
            "id" => 5,
            "name" => "Melk",
            "category" => "Zuivel",
            "image" => "./images/melk.jpg",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getProductDetails($id)
{
    $tags = [
        1 => [
            "description" => "Put it in the oven and go!",
            "tags" => ['cheese', 'oven']
        ],
        2 => [
            "description" => "You can make this delicious Dutch meal by ...",
            "tags" => ['unox', 'healthy', 'stamppot', 'boerenkool']
        ],
        3 => [
            "description" => "Very nice when your grandma prepares this meal",
            "tags" => ['omnomnom']
        ],
        4 => [
            "description" => "Everytime in the city after midnight",
            "tags" => ['kapsalon', 'tasty', 'meat']
        ],
        5 => [
            "description" => "Specialty when on holiday in Spain",
            "tags" => ['fish']
        ],
    ];

    return $tags[$id];
}