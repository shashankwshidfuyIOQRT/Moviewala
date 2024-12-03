// Movie Data
const movies = [
    {
        id: 1,
        title: "Stree 2",
        releaseDate: "2024-05-01",
        poster: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fa%2Fa1%2FStree_2.jpg&tbnid=OTHYnbqhee8j4M&vet=1&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FStree_2&docid=KeaI1LQGwTrVDM&w=283&h=354&source=sh%2Fx%2Fim%2Fm5%2F2&kgs=3f601c687bd28939&shem=abme%2Ctrie",
        description: "A hilarious sequel to the 2018 hit, Stree 2 continues the spooky fun with Rajkummar Rao and Shraddha Kapoor reprising their roles.",
        genre: "horrer, comedy",
        reviews: [],
        downloadLink: "https://driveleech.org/file/VLl5nAYS9ctfghnr1ym2"
    },
    {
        id: 2,
        title: "Movie 2",
        releaseDate: "2024-06-15",
        poster: "movie2.jpg",
        description: "A heartwarming comedy.",
        genre: "comedy",
        reviews: [],
        downloadLink: "https://download-link.com/movie2"
    },

     {
        id: 2,
        title: "Movie 2",
        releaseDate: "2024-06-15",
        poster: "movie2.jpg",
        description: "A heartwarming comedy.",
        genre: "comedy",
        reviews: [],
        downloadLink: "https://download-link.com/movie2"
    },


 {
        id: 2,
        title: "Movie 2",
        releaseDate: "2024-06-15",
        poster: "movie2.jpg",
        description: "A heartwarming comedy.",
        genre: "comedy",
        reviews: [],
        downloadLink: "https://download-link.com/movie2"
    },


 {
        id: 2,
        title: "Movie 2",
        releaseDate: "2024-06-15",
        poster: "movie2.jpg",
        description: "A heartwarming comedy.",
        genre: "comedy",
        reviews: [],
        downloadLink: "https://download-link.com/movie2"
    },































    
    // Add more movies
];

const itemsPerPage = 5; // Number of movies per page
let currentPage = 1;

// Load Movies
function loadMovies(page = 1, genre = "all") {
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    const movieList = document.getElementById("movie-list");
    const filteredMovies = genre === "all" ? movies : movies.filter(movie => movie.genre === genre);
    const paginatedMovies = filteredMovies.slice(start, end);

    movieList.innerHTML = paginatedMovies.map(movie => `
        <div class="movie-item" onclick="goToDetails(${movie.id})">
            <img src="${movie.poster}" alt="${movie.title} Poster">
            <h2>${movie.title}</h2>
            <p>Release Date: ${movie.releaseDate}</p>
            <p>Genre: ${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</p>
        </div>
    `).join("");

    generatePagination(filteredMovies.length, page, genre);
}

// Generate Pagination Buttons
function generatePagination(totalItems, currentPage, genre) {
    const pagination = document.getElementById("pagination");
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.innerText = i;
        button.className = i === currentPage ? "active" : "";
        button.onclick = () => loadMovies(i, genre);
        pagination.appendChild(button);
    }
}

// Search Movies
function searchMovies() {
    const searchValue = document.getElementById("search-bar").value.toLowerCase();
    const movieList = document.getElementById("movie-list");
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchValue));
    movieList.innerHTML = filteredMovies.map(movie => `
        <div class="movie-item" onclick="goToDetails(${movie.id})">
            <img src="${movie.poster}" alt="${movie.title} Poster">
            <h2>${movie.title}</h2>
            <p>Release Date: ${movie.releaseDate}</p>
        </div>
    `).join("");
}

// Filter Movies by Genre
function filterByGenre() {
    const genre = document.getElementById("genre-filter").value;
    loadMovies(1, genre);
}

// Navigate to Details Page
function goToDetails(movieId) {
    localStorage.setItem("selectedMovie", JSON.stringify(movies.find(movie => movie.id === movieId)));
    window.location.href = "details.html";
}

// Load initial movies
window.onload = () => loadMovies();
