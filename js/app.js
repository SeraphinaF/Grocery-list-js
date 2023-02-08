window.addEventListener('load', init);

let apiUrl = "./webservices/index.php";
let dishCard;
let vacationData = {};
let gallery = document.getElementById('gallery');


function init() {
    ajaxRequest(apiUrl, makeDataCard)
}

const ajaxRequest = (url, func) => {
    console.log(apiUrl);
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

}

function makeDataCard(data) {

    for (let card of data) {
        console.log(data);

        let groceryCard = document.createElement('div');
        groceryCard.classList.add('grocery-card');
        groceryCard.dataset.id = card.id;

        gallery.appendChild(groceryCard);

        let name = document.createElement('h2');
        name.innerHTML = `${card.name}`;
        groceryCard.appendChild(name);
    
        let category = document.createElement('h3')
        category.innerHTML = `${card.category}`;
        groceryCard.appendChild(category);
    
        let image = document.createElement('img');
        image.src = card.image;
        image.classList.add('image');
        groceryCard.appendChild(image);

        let button = document.createElement('button');
        button.classList.add('btn');
        button.innerHTML = 'Meer details';
        button.dataset.id = card.id;
        button.addEventListener('click', () => {
            ajaxRequest(`${apiUrl}?id=${card.id}`, showDetails)
        });

        groceryCard.appendChild(button);
        
    }

    function showDetails(card){
        console.log(card)

        let detailsCard = document.getElementById('modal-content')
       
        //empty the div
        detailsCard.innerHTML = '';
        detailsCard.style.display ='block';

        //add content
        let detailsName = document.createElement("h2")
        detailsName.innerHTML = card.detailsCard + 'Details:';
        detailsName.appendChild(detailsCard);

        let description = document.createElement("p");
        description.innerHTML = '<br' + card.description;
        detailsCard.appendChild(description);
        
        //close details
        let closeDetails = document.createElement('button')
        closeDetails.classList.add("buttonClass")
        closeDetails.addEventListener("click", () => {
            detailsCard.style.display = "none";
        });

        closeDetails.innerHTML = "close details";
        detailsCard.appendChild(closeDetails);
        }
    }



