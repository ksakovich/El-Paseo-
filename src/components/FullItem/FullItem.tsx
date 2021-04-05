import React, { Component } from 'react';

import './FullItem.css';

interface Props
{
    id: number | null
}

class FullItem extends Component<Props>
{
    render()
    {
        console.log('FullItem', this.props.id)

        let item = <p style={{ textAlign: 'center' }}>Please select an Item!</p>;
        if (this.props.id != null)
        {
            console.log('wtf')

            item = (
                <div className="FullItem">
                    <h1>Title</h1>
                    <p>Content</p>
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