// Movie Data
const movies = [
    {
        id: 1,
        title: "Stree 2",
        releaseDate: "2024-08-31",
        poster: "images/movie1.jpg",
        description: "Stree 2: Sarkate Ka Aatank is a 2024 movie about a headless ghost named Sarkata who targets women in the town of Chanderi.",
        genre: "horrer",
        reviews: [],
        downloadLinks: {
            "480p": "https://driveleech.org/file/HPzOCWWs2xzjPKlKozGR",
            "720p": "https://driveleech.org/file/CekzFzb5vCnqse6sTEXS",
            "1080p": "https://driveleech.org/file/thNeYkiaJzRGoOnRG0VM"
        } ,
        addedDate: "2024-11-30" // Older date
        
    },
   
   
   
    {
        id: 2,
        title: "Singham Again",
        releaseDate: "2024-11-01",
        poster: "images/movie2.jpg",
        description: "A heartwarming comedy.",
        genre: "action",
        reviews: [],
        downloadLinks: {
        "480p": "https://driveleech.org/file/sIgcdFh3NebhEzRuFA5p",
            "720p": "https://driveleech.org/file/5YfSgS0eOX4aVWTSysP1",
            "1080p": "https://driveleech.org/file/Rh5r4B0buGgqPA89c8bB"
        },
        addedDate: "2024-11-30" // Older date
    },
    
    {
        id: 3,
        title: " The grave of the fireflies",
        releaseDate: "16 April 1988",
        poster: "images/image3.jpg",
        description: "A heartwarming Story.",
        genre: "drama",
        reviews: [],
        downloadLinks: {
        "480p": "https://driveseed.org/file/S1KXbWzT2cwz6MRr5qxs",
            "720p": "https://driveseed.org/file/UVicPJWx428CF3lq4UO6",
            "1080p": "https://driveseed.org/file/KOFrQ4yX4zEC0nMbuEux"
        },
        addedDate: "2024-11-30" // Older date
    },
    

    {
        id: 4,
        title: " Bhool Bhulaiyaa 3",
        releaseDate: "May 25, 2024",
        poster: "images/image4.jpg",
        description: "The third installment in the popular horror-comedy franchise, Bhool Bhulaiyaa 3 features Kartik Aaryan in a lead role.",
        genre: "horrer",
        reviews: [],
        downloadLinks: {
        "480p": "https://driveleech.org/file/E0Y47ODjNbA7k4cnNyBp",
            "720p": "https://driveleech.org/file/UwE9v3r0CM5k3Rt5r2jm",
            "1080p": "https://driveleech.org/file/Rh5r4B0buGgqPA89c8bB"
        },
        addedDate: "2024-11-30" // Older date
    },

    {
        id: 5,
        title: " Pushpa 2",
        releaseDate: "5 Dec 2024",
        poster: "images/image5.jpg",
        description: "Pushpa maderchod hai bhosdiwala  behanchod cinema haal mai jake koi mat dekhna yahan se dekho bas",
        genre: "action",
        reviews: [],
        downloadLinks: {
        "1080p": "https://driveleech.org/file/Ydm8gnH0OG",
            "720p": "https://driveleech.org/file/72xEa31HBU",
            "480p": "https://driveleech.org/file/smOMd0LtZo"
        },
        addedDate: "2024-12-05" // Older date
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
window.onload = () => loadMovies();
