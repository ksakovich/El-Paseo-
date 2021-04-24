import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';


export type ItemProps = {
    itemId: number,
    categoryId: number,
    itemName: string,
    itemDescription: string,
    itemPrice: number,
    itemSize: string,
    isComposite: boolean,
    itemUnits: string,
    quantityInStock: number
    clicked: (id: number | null) => void
};

const mystyle = {
    height: '70%',
    width: '100%'
};
// const path = require('path');
export const Item = (props: ItemProps) => (

    <Card className="Item card" onClick={() => { console.log('onClick'); props.clicked(props.itemId); return true }} >
        <Card.Img as={Image} variant="top" src={'./Images/Products/pie.jpg'} className='img-fluid card-img-top' style={mystyle} />
        <Card.Body className="card-body">
            <Card.Title className="card-title">{props.itemName}</Card.Title>
            <Card.Text className="text-muted">
                {props.itemPrice}
            </Card.Text>
            <Link className="outline-success " to='item-details/:itemId' />
            <button onClick={() => { console.log('Item Clicked'); }}> Click</button>

        </Card.Body>
    </Card>
);

