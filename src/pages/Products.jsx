import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { productData } from './productData';



const Products = () => {
  return (
    <Container>
      <h1 className="text-center my-4">Books</h1>
      <Row>
        {productData.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            {/* Using Link component with target="_blank" for opening in a new tab */}
            <Link 
              to={{ pathname: `/products/${product.id}` }} 
              target="_blank" 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card>
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text><strong>Price: {product.price}</strong></Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
