window.addEventListener('load', init);

let apiUrl = "./webservices";
let productCard;
let ProductsData = {};
let gallery;


function init() {
    ajaxRequest(apiUrl, makeDataCard)
}
