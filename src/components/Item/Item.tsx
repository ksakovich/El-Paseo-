import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';


export type ItemProps = {
    userId: number,
    id: number,
    title: string,
    body: string,
    author: string,
    clicked: (id: number | null) => void
};

const mystyle = {
    height: '70%',
    width: '100%'
};
// const path = require('path');
const item = (props: ItemProps) => (
    // <article className="Item" onClick={() => { console.log('onClick'); props.clicked(props.id); return true }} style={{ cursor: 'pointer' }}>
    //     <h1>{props.title}</h1>
    //     <div className="Info">
    //         <div className="Author">{props.author}</div>
    //     </div>
    // </article>

    <Card className="Item card" onClick={() => { console.log('onClick'); props.clicked(props.id); return true }} >
        <Card.Img as={Image} variant="top" src={'./Images/Products/pie.jpg'} className='img-fluid card-img-top' style={mystyle} />
        <Card.Body className="card-body">
            <Card.Title className="card-title">{props.title}</Card.Title>
            <Card.Text className="text-muted">
                {props.author}
            </Card.Text>
            <button onClick={() => { console.log('Item Clicked'); }}> Click</button>
            <Link to='item-details/:id' />
        </Card.Body>
    </Card>

);

export default item;