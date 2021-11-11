import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, img, title, description, price } = product;

    return (
        <Col sm={12} md={6} lg={4}>
            <div className="m-2">
                <Card className="mx-auto card" style={{ width: "21rem" }}>
                    <Card.Img variant="top" className="img-fluid mx-auto" src={img} />
                    <Card.Body className="my-1 py-1">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>Price:${price}</Card.Text>
                    </Card.Body>

                    <Card.Body className="d-flex">
                        <NavLink
                            to={`/purchase/${_id}`}
                            className="btn btn-primary w-100 me-1"
                        >
                            Purchase
                        </NavLink>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    );
};

export default Product;