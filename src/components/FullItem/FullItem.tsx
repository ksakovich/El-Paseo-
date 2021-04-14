import React, { Component } from 'react';
import axios from 'axios';
import { ItemProps } from '../Item/Item'
import './FullItem.css';

interface Props
{
    id: number | null
}

class FullItem extends Component<Props>
{
    state: { loadedItem: ItemProps | null } = {
        loadedItem: null
    }

    componentDidUpdate(prevProps: ItemProps)
    {
        if (this.props.id !== null)
        {
            console.log("First if statement")
            // if (!this.state.loadedItem || (this.state.loadedItem && this.state.loadedItem.id !== this.props.id))
            if (this.props.id && this.props.id !== prevProps.id) 
            {
                axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then(response =>
                    {
                        this.setState({ loadedItem: response.data });
                        console.log("response data: ", response.data)
                    });
            }
        }
    }

    render()
    {
        console.log('FullItem', this.props.id)

        let item = <p style={{ textAlign: 'center' }}>Please select an Item!</p>;
        if (this.props.id)
        {
            item = <p style={{ textAlign: 'center' }}>Loading...!</p>;
            console.log(this.state.loadedItem);
        }
        if (this.state.loadedItem !== null)
        {
            item = (
                <div className="FullItem">
                    <h1>{this.state.loadedItem.title}</h1>
                    <p>{this.state.loadedItem.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );
        }

        return item;
    }
}

export default FullItem;