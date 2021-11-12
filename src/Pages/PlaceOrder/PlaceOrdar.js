
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hook/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';

const PlaceOrdar = () => {

    const { serviceID } = useParams();
    const { user } = useAuth()
    const [service, setService] = useState({})
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`https://shrouded-fjord-17190.herokuapp.com/services/${serviceID}`)
            .then(res => res.json())
            .then(data => setService(data)
            )
    }, [])

    const onSubmit = data => {
        const savedCart = getStoredCart();

        data.ordar = savedCart;

        axios.post('https://shrouded-fjord-17190.herokuapp.com/ordars', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('success full');
                    clearTheCart();
                    reset();
                }
            })

    }

    return (
        <div>

            <Container>
                <Row>
                    <Col className='col-lg-12'>
                        <img src='https://i.ibb.co/5n0jSKc/h5-tour-f-img-8.jpg' className='img-fluid' alt='' />
                    </Col>
                    <Col className='col-lg-12 d-flex align-items-center'>
                        <Col className="col-lg-4">
                            <img src={service.img} className='imf-fluid w-75' alt='' />
                        </Col>
                        <Col className='col-lg-4'>
                            <h3>Deatails of {service.name}</h3>
                            <p>Deatails of {service.more_description}</p>
                            <li>Ordar id : {serviceID}</li>
                            <li>Ordar Date : 12-11-2021</li>
                            <ul>Included :  1. Meals 2. Personal Guide 3.Transportation/Car</ul>
                        </Col>
                        <Col className='col-lg-4'>
                            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                                <input defaultValue={user.displayName} {...register("name")} />

                                <input defaultValue={user.email} {...register("email", { required: true })} />
                                {errors.email && <span className="error">This field is required</span>}
                                <input placeholder="Address" defaultValue="" {...register("address")} />
                                <input placeholder="City" defaultValue="" {...register("city")} />
                                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                                <input type="submit" />
                            </form>
                        </Col>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default PlaceOrdar;
