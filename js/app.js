window.addEventListener('load', init);

let apiUrl = "./webservices/index.php";
// let dishCard;
// let vacationData = {};
let gallery = document.getElementById('gallery');

//modal variables
let modal = document.getElementById('myModal');
// let closeBtn = document.getElementById('modal-close');

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

        let price = document.createElement('h3')
        price.innerHTML = `${card.price}`;
        groceryCard.appendChild(price);

        let image = document.createElement('img');
        image.src = card.image;
        image.classList.add('image');
        groceryCard.appendChild(image);

        let detailsBtn = document.createElement('button');
        detailsBtn.classList.add('btn');
        detailsBtn.innerHTML = 'Meer details';
        detailsBtn.dataset.id = card.id;
        // detailsBtn.addEventListener('click', showDetails);
        detailsBtn.addEventListener('click', () => {
            ajaxRequest(`${apiUrl}?id=${card.id}`, showDetails)
        });

        groceryCard.appendChild(detailsBtn);
    }

}

function showDetails(card) {

        modal.style.visibility = 'visible';
        let detailsCard = document.getElementById('modal-content')

        console.log(detailsCard)
        //empty the div
        detailsCard.innerHTML = "";
        // detailsCard.style.display = 'block';

        //add content title:
        let detailsName = document.createElement("h2")
        detailsName.innerHTML = card.detailsCard + 'Details:';
        detailsCard.appendChild(detailsName);

        //add ingredients
        let ingredients = document.createElement("p");
        ingredients.innerHTML = card.ingredients;
        detailsCard.appendChild(ingredients);

        let category = document.createElement("h5");
        category.innerHTML = 'Categorie:' + '' +card.tags;
        detailsCard.appendChild(category);

        console.log(card.ingredients)

        let closeDetails = document.getElementById('modal-close');
        closeDetails.addEventListener("click", () => {
            modal.style.visibility = "hidden";
        });

        // let closeDetails = document.getElementById('modal-close');
        // closeDetails.addEventListener('click', closeDetails);

        //close details
        // let closeDetails = document.createElement('button')
        // closeDetails.classList.add("buttonClass")
        // closeDetails.addEventListener("click", () => {
        //     detailsCard.style.display = "none";
        // });

        // closeDetails.innerHTML = "close details";
        // detailsCard.appendChild(closeDetails);

        // let closeButton = document.getElementById('modal-close')

        // closeButton.addEventListener('click', () => {
        //     closeButton.style.display = 'none'
        // });
    }

    // function closeDetails(){
    //     console.log(123)
    //     modal.style.visibility = 'hidden';
        
    // }

//     function showDetails(card) {
//         console.log(card)

//         let detailsCard = document.getElementById('modal-content')

//         //empty the div
//         detailsCard.innerHTML = "";
//         detailsCard.style.display = 'block';

//         //add content title:
//         let detailsName = document.createElement("h2")
//         detailsName.innerHTML = card.detailsCard + 'Details:';
//         detailsName.appendChild(detailsCard);

//         //add description
//         console.log(card.description)

//         let description = document.createElement("p");
//         description.innerHTML = '<br' + card.description;
//         detailsCard.appendChild(description);

//         //close details
//         let closeDetails = document.createElement('button')
//         closeDetails.classList.add("buttonClass")
//         closeDetails.addEventListener("click", () => {
//             detailsCard.style.display = "none";
//         });

//         closeDetails.innerHTML = "close details";
//         detailsCard.appendChild(closeDetails);

//         let closeButton = document.getElementById('modal-close')

//         closeButton.addEventListener('click', () => {
//             closeButton.style.display = 'none'
//         });
//     }

// }



