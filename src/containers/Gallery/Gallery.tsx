import React, { Component } from 'react';
import axios from 'axios';

import Item, { ItemProps } from '../../components/Item/Item';
import FullItem from '../../components/FullItem/FullItem';
import NewItem from '../../components/NewItem/NewItem';
import './Gallery.css';


class Gallery extends Component
{
    state: { items: ItemProps[], selectedItemId: number | null } =
        {
            items: [],
            selectedItemId: null
        }

    source = axios.CancelToken.source();

    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts', { cancelToken: this.source.token })
            .then(response =>
            {
                const items = response.data.slice(0, 4);
                const updatedItems = items.map((item: ItemProps) =>
                {
                    return {
                        ...item,
                        author: "Kirill"
                    }
                }
                );
                this.setState({ items: updatedItems });
            }).catch(e =>
            {
                console.log(e);
            });
    }

    itemSelectedHandler = (id: number) =>
    {
        console.log('itemSelectedHandler', id)

        this.setState({ selectedItemId: id });
    }

    render()
    {
        const items = this.state.items.map(item =>
        {
            return <Item
                id={item.id}
                title={item.title}
                key={item.id} author={item.author}
                clicked={() => this.itemSelectedHandler(item.id)} />;
        });
        return (
            <div>
                <section className="Galleries">
                    {items}
                </section>
                <section>
                    <FullItem id={this.state.selectedItemId} />
                </section>
                <section>
                    <NewItem />
                </section>
            </div>
        );
    }

    componentWillUnmount()
    {
        this.source.cancel()
    }
}

export default Gallery;