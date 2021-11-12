
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const MyOrdars = () => {

    const [ordars, setOrdars] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-fjord-17190.herokuapp.com/ordars')
            .then(res => res.json())
            .then(data => setOrdars(data))

    }, [])

    return (
        <div>
            {
                ordars.map(ordar =>
                    <Container fluid className='mb-4'>
                        <Row>
                            <h2>Your Ordar </h2>
                            <Col className="card" style={{ width: "18rem" }}>
                                <div class="card-body">
                                    <h5 class="card-title">{ordar.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">{ordar.address}</h6>
                                    <p class="card-text">{ordar.city}</p>
                                    <p className='card-text'>{ordar.email}</p>
                                    <p className='card-text'>{ordar.phone}</p>
                                    <p className='card-text'>Ordar id : {ordar._id}</p>
                                </div>
                            </Col>

                        </Row>
                    </Container>)
            }
        </div>
    );
};

export default MyOrdars;

