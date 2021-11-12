import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Service = ({ service }) => {
    const { name, img, description, _id, price } = service;

    return (
        <Card className="col-lg-4 col-md-6 g-3 shadow">
            <Card.Body>
                <Card.Img className="" src={img} />
                <Card.Title>{name}</Card.Title>

                <Card.Text className='txt-custom'>
                    {description}
                </Card.Text>
                <Card.Title>{price}</Card.Title>
                <Link to={`/placeorder/${_id}`}>

                    <button className='btn btn-custom bg-warning'>Book Now</button>
                </Link>

            </Card.Body>

        </Card>
    );
};

export default Service;