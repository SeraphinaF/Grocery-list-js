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
            "image" => "",
        ],
        [
            "id" => 2,
            "name" => "Boerenkool",
            "category" => "Groenten",
            "image" => "",
        ],
        [
            "id" => 3,
            "name" => "Tomaten",
            "category" => "Groenten",
            "image" => "",
        ],
        [
            "id" => 4,
            "name" => "Kaas",
            "category" => "Zuivel",
            "image" => "",
        ],
        [
            "id" => 5,
            "name" => "Melk",
            "category" => "Zuivel",
            "image" => "",
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
            "recipe" => "Put it in the oven and go!",
            "tags" => ['cheese', 'oven']
        ],
        2 => [
            "recipe" => "You can make this delicious Dutch meal by ...",
            "tags" => ['unox', 'healthy', 'stamppot', 'boerenkool']
        ],
        3 => [
            "recipe" => "Very nice when your grandma prepares this meal",
            "tags" => ['omnomnom']
        ],
        4 => [
            "recipe" => "Everytime in the city after midnight",
            "tags" => ['kapsalon', 'tasty', 'meat']
        ],
        5 => [
            "recipe" => "Specialty when on holiday in Spain",
            "tags" => ['fish']
        ],
    ];

    return $tags[$id];
}