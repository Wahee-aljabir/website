const accessKey = "V_Z-tooQIdJJucLtjDjx-Je80oQ-XeMy0RyQGdn4Xqk";

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1){
        searchResults.innerHTML = "";
    };

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");
        image.src = result.urls.regular; // Update to the correct property like 'urls.regular'
        image.alt = result.alt_description; // Update to the correct property like 'alt_description'
        
        const imageLink = document.createElement("a"); // Create a new anchor element
        imageLink.href = result.links.html; // Update to the correct property like 'links.html'
        imageLink.target = "_blank"; // Correct the 'target' attribute
        imageLink.textContent = result.alt_description;
    
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    });

    page++;
    if (page > 1) {
        showMore.style.display = "block";
    };
};

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", () => {
    searchImages();
});