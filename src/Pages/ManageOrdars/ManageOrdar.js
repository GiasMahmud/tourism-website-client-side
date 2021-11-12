import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ManageOrdar = () => {

    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('https://shrouded-fjord-17190.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    const handleDelete = (id) => {
        const url = `https://shrouded-fjord-17190.herokuapp.com/services/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Successfully deleted')
                    const reamaing = services.filter(service => service._id !== id)
                    setServices(reamaing)
                }
            })
    }

    return (
        <div>

            <Container className='mt-5'>
                <h1 className='bold-tx'>We can manage our <span className='covid-text'>services</span></h1>
                <Row>
                    {
                        services.map(service =>
                            <Container fluid className='mb-4'>
                                <Row>
                                    <Col className='col-lg-6'>
                                        <img src={service.img} alt='' className='w-25' />

                                    </Col>
                                    <Col className='col-lg-6'>
                                        <h4>{service.name}</h4>
                                        <h4>{service.description}</h4>
                                        <button onClick={() => handleDelete(service._id)} className='btn btn-danger'>Delete</button>
                                    </Col>
                                </Row>
                            </Container>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default ManageOrdar;
