import React, { useState } from "react";
import "./ReviewPage.css";

const reviewsData = [
  {
    id: 1,
    title: "Great Product",
    rating: 5,
    comments: "I love this product! It's so easy to use and works great.",
  },

  {
    id: 2,
    title: "Not worth the money",
    rating: 2,
    comments:
      "I was really disappointed with this product. It didn't work as advertised and was a waste of money.",
  },
  
  {
    id: 3,
    title: "So-so product",
    rating: 3,
    comments:
      "This product is just okay. It works fine, but there are other products out there that are better.",
  },
];

const Review = ({ review }) => {
  return (
    <div className="review">
      <h2 className="review-title">{review.title}</h2>
      <p className="review-rating">Rating: {review.rating}</p>
      <p className="review-comments">{review.comments}</p>
    </div>
  );
};

const ReviewPage = () => {
  const [reviews, setReviews] = useState(reviewsData);

  return (
    <div className="review-page">
      <h1 className="page-title">Product Reviews</h1>
      <div className="reviews-container">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;