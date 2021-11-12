import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Branch = () => {

    return (

        <Container className="col-lg-9 sm-12 mt-5 mb-5 bg-info">


            <h1 className='bold-tx'>We Are Available Now</h1>

            <div>
                <Card className="shadow mt-1">
                    <Card.Body>
                        <Card.Title><h1 class="card-title">Europe</h1></Card.Title>
                        <Card.Img className="" src="https://hillingdonlibraries.files.wordpress.com/2020/07/europe-1000x600-1.jpg" />
                        <Card.Title><h5 class="card-title"> </h5></Card.Title>

                        <Card.Text className='txt-custom'>
                            <p class="card-text">European countries have had time to perfect urban planning and get public transport under control. This makes getting around so easy! Travellers can enjoy a variety of sights in a relatively short space of time.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
            <div>
                <Card className="shadow mt-1">

                    <Card.Body>
                        <Card.Title><h1 class="card-title">Asia</h1></Card.Title>
                        <Card.Img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWoemRejwmUac7nAbTp_CPnHYcVuTM_bnHqNJNG2NwEB7f9NI93Jq22qSxCWUMRkT3aEI&usqp=CAU" />


                        <Card.Text className='txt-custom'>
                            <p class="card-text">Home to some of the world's oldest cultures, fascinating architecture, beautiful natural landscapes, delicious foods and friendly locals; colorful Asia ticks all the right boxes for a top holiday destination.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>

            <div>
                <Card className=" shadow mt-1 mb-2">
                    <Card.Body>
                        <Card.Title><h1 class="card-title">Middle East</h1></Card.Title>
                        <Card.Img className="" src="https://3.imimg.com/data3/IN/AM/MY-9226434/middle-east-500x500.jpg" />
                        <Card.Title><h5 class="card-title"> </h5></Card.Title>

                        <Card.Text className='txt-custom'>
                            <p class="card-text">The Middle East is a very important region to visit for many reasons: It's where the history of man, religion, and global issues merge. Middle East will give travelers some of their most unique experiences</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>


        </Container>
    );
};

export default Branch;


