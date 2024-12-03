function loadMovieDetails() {
    const movie = JSON.parse(localStorage.getItem("selectedMovie"));
    if (!movie) {
        document.getElementById("movie-details").innerHTML = "<p>Movie not found!</p>";
        return;
    }

    const movieDetails = `
        <img src="${movie.poster}" alt="${movie.title} Poster">
        <h2>${movie.title}</h2>
        <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
        <p>${movie.description}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <div class="reviews">
            <h3>User Reviews</h3>
            <ul>
                ${movie.reviews.length > 0 ? movie.reviews.map(review => `<li>${review}</li>`).join("") : "<li>No reviews yet.</li>"}
            </ul>
            <textarea id="review-text" placeholder="Write a review..."></textarea>
            <button onclick="addReview(${movie.id})">Submit Review</button>
        </div>
        <a href="${movie.downloadLink}" target="_blank" class="download-btn">Download Movie</a>
    `;
    document.getElementById("movie-details").innerHTML = movieDetails;
}

function addReview(movieId) {
    const reviewText = document.getElementById("review-text").value.trim();
    if (!reviewText) return;

    const movie = movies.find(m => m.id === movieId);
    movie.reviews.push(reviewText);

    localStorage.setItem("selectedMovie", JSON.stringify(movie));
    loadMovieDetails();
}

window.onload = loadMovieDetails;
