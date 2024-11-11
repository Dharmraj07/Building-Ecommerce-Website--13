import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Button, Row, Col, Form } from 'react-bootstrap';
import { productData } from './productData';



const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  const product = productData.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(1);

  const handleAddToCart = () => {
    console.log(`${product.name} added to the cart`);
  };

  const handleBuyNow = () => {
    console.log(`Buying ${product.name} now!`);
  };

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      product.reviews.push({ user: "Guest", comment: newReview, rating: parseInt(rating) });
      setNewReview('');
      setRating(1);
    }
  };

  return (
    <Container className="my-4">
      <Card className="shadow-sm">
        <Card.Img variant="top" src={product.image} style={{ maxHeight: '300px', objectFit: 'contain' }} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text><strong>Price: {product.price}</strong></Card.Text>

          {/* Book Details */}
          <Card.Text><strong>Author:</strong> {product.author}</Card.Text>
          <Card.Text><strong>Publication Date:</strong> {product.publicationDate}</Card.Text>
          <Card.Text><strong>About the Book:</strong> {product.aboutBook}</Card.Text>

          {/* Buttons */}
          <Row className="mt-3">
            <Col>
              <Button variant="primary" onClick={handleAddToCart} className="w-100">
                Add to Cart
              </Button>
            </Col>
            <Col>
              <Button variant="success" onClick={handleBuyNow} className="w-100">
                Buy Now
              </Button>
            </Col>
          </Row>

          {/* Reviews Section */}
          <div className="mt-4">
            <h5>Reviews</h5>
            {product.reviews.length > 0 ? (
              <ul>
                {product.reviews.map((review, index) => (
                  <li key={index}>
                    <strong>{review.user}</strong> - {review.rating} stars
                    <p>{review.comment}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reviews yet.</p>
            )}

            {/* Add a Review */}
            <Form onSubmit={handleSubmitReview}>
              <Form.Group>
                <Form.Label>Your Review</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={newReview}
                  onChange={handleReviewChange}
                  placeholder="Write your review here..."
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Rating</Form.Label>
                <Form.Control as="select" value={rating} onChange={handleRatingChange}>
                  {[1, 2, 3, 4, 5].map((rate) => (
                    <option key={rate} value={rate}>{rate} Star{rate > 1 ? 's' : ''}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Button type="submit" variant="primary">Submit Review</Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetails;
