window.addEventListener('load', init);

let apiUrl = "./webservices";
let dishCard;
let makeDataCard;
let vacationData = {};
let gallery;


function init() {
    ajaxRequest(apiUrl, makeDataCard)
}

const ajaxRequest = (url, func) => {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(func)
        .catch((error) => {
            console.log(error)
        });


    function makeDataCard(data) {

        for (let card of data) {

            let gallery = document.getElementById('new-gallery');
            let vacationCard = document.createElement('div');
            vacationCard.classList.add('vacation-card');
            vacationCard.dataset.id = card.id;

            gallery.appendChild(vacationCard);

            let locations = document.createElement('h2')
            locations.innerHTML = `${card.location}`;
            vacationCard.appendChild(locations)

            let number = document.createElement('h3')
            number.innerHTML = `${card.number}`;
            vacationCard.appendChild(number);

            let image = document.createElement('img');
            image.src = card.image;
            image.classList.add('image');
            vacationCard.appendChild(image);

            let button = document.createElement('button');
            button.classList.add('btn');
            button.innerHTML = 'Meer details';
            button.dataset.id = card.id;

            button.addEventListener('click', () => {
                ajaxRequest(`${apiUrl}?id=${card.id}`, showDetails)
            });

            vacationCard.appendChild(button)
            vacationData[card.id] = card;
        }
    }
}
