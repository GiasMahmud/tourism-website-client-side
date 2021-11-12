import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Container, Row } from 'react-bootstrap';


const Services = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('https://shrouded-fjord-17190.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container className='mt-5'>
            <h1 className='bold-tx'>Our Special offers</h1>
            <Row>
                {
                    services.map(service => <Service
                        service={service}
                        key={service.id}
                    ></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;
