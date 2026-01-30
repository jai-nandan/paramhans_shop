// feedback.js
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get values from form
    const name = document.querySelector('input[placeholder="John Doe"]').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const comment = document.querySelector('textarea').value;
    const date = new Date().toLocaleDateString();

    const newReview = { name, rating, comment, date };

    // SAVE TO LOCAL STORAGE (For immediate demo)
    let reviews = JSON.parse(localStorage.getItem('userReviews')) || [];
    reviews.push(newReview);
    localStorage.setItem('userReviews', JSON.stringify(reviews));

    alert("Thank you! Your review has been added to the Reviews page.");
    window.location.href = "reviews.html"; // Redirect to see result
});