import React from 'react';
import { Image, Container } from 'react-bootstrap';

const NotFoundPage = () =>
{
    const mystyle = {
        height: '70%',
        width: '70%'
    };


    return (
        <Container>
            <Image src={'./Images/NotFound/404_page.jpg'} className='img-fluid card-img-top' style={mystyle} />
        </Container>
    );
};
export default NotFoundPage;