import React from 'react';
import { Card, Col } from 'react-bootstrap';

const UserReview = ({ review }) => {
    const { _id, name, email, message, rating } = review;
    return (
        <Col sm={12} md={6} lg={4}>
            <div className="m-2">
                <Card className="mx-auto card" style={{ width: "21rem" }}>
                    <Card.Body className="my-1 py-1">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{email}</Card.Text>
                        <Card.Text>Review: {message}</Card.Text>
                        <Card.Text>Rating:{rating}{<i className="fas fa-star text-warning"></i>} </Card.Text>
                    </Card.Body>

                </Card>
            </div>
        </Col>
    );
};

export default UserReview;