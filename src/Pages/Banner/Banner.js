import React from 'react';
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <Container className='mt-5 mb-5'>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Travelling is the best entertainment</h1>
                            <p>Explore the World and enjoy the life. “The world is a book and those who do not travel read only one page.”</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://dazzlingtravelplanners.com/wp-content/uploads/2019/04/2_1149785620.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Travelling is the best entertainment</h1>
                            <p>Explore the World and enjoy the life. “The world is a book and those who do not travel read only one page.”</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://us.123rf.com/450wm/dreamcreation01/dreamcreation011810/dreamcreation01181000233/110073072-vector-illustration-of-explore-the-world-with-famous-architectural-landmarks.jpg?ver=6" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Travelling is the best entertainment</h1>
                            <p>Explore the World and enjoy the life. “The world is a book and those who do not travel read only one page.”</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </Container >
    );
};

export default Banner;