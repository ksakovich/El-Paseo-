import React from 'react';
import './Item.css';


export type ItemProps = {
    // userId: number,
    id: number,
    title: string,
    // body: string
    author: string,
    clicked: (id: number | null) => void
};

const item = (props: ItemProps) => (
    <article className="Item" onClick={() => { console.log('onClick'); props.clicked(props.id); return true }} style={{ cursor: 'pointer' }}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default item;