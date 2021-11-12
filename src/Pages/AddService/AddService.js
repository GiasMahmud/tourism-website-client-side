import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://shrouded-fjord-17190.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service m-5">
            <h2 className='m-5'>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='m-5' {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea className='m-5' {...register("description")} placeholder="Description" />
                <textarea className='m-5' {...register("price")} placeholder="Price" />
                <input className='m-5' {...register("img")} placeholder="image url" />
                <input className='btn btn-dark' type="submit" />
            </form>
        </div>
    );
};

export default AddService;