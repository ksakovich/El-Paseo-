import React, { Component } from 'react';
import axios from 'axios';
import { ItemProps, Item } from '../../components/Item/Item';
import FullItem from '../../components/FullItem/FullItem';
import NewItem from '../../components/NewItem/NewItem';
import { items as galleryItems, } from '../../backend/models/gallery';
import { Item as GalleryItem } from '../../backend/models/item';

import './Gallery.css';




class Gallery extends Component
{
    state: { items: ItemProps[], selectedItemId: number | null } =
        {
            items: [],
            selectedItemId: null
        }

    // source = axios.CancelToken.source();


    componentDidMount()
    {
        //     axios.get('https://jsonplaceholder.typicode.com/posts', { cancelToken: this.source.token })
        //         .then(response =>
        //         {
        //             const items = response.data.slice(0, 6);
        //             const updatedItems = items.map((item: ItemProps) =>
        //             {
        //                 return {
        //                     ...item,
        //                     author: "Kirill"
        //                 }
        //             }
        //             );
        //             this.setState({ items: updatedItems });
        //         }).catch(e =>
        //         {
        //             console.log(e);
        //         });
        let dummyItems = galleryItems;
        let items = dummyItems;
        const updatedItems = items.map((item: GalleryItem) =>
        {
            return {
                ...item,
            }
        });
        this.setState({ items: updatedItems });


    }


    itemSelectedHandler = (id: number) =>
    {
        // event.preventDefault();
        console.log('itemSelectedHandler', id)

        this.setState({ selectedItemId: id });
    }

    render()
    {
        const items = this.state.items.map(item =>
        {
            return <Item
                key={item.itemId}
                itemId={item.itemId}
                categoryId={item.categoryId}
                itemName={item.itemName}
                itemDescription={item.itemDescription}
                itemPrice={item.itemPrice}
                itemSize={item.itemSize}
                isComposite={item.isComposite}
                itemUnits={item.itemUnits}
                quantityInStock={item.quantityInStock}
                clicked={() => this.itemSelectedHandler(item.itemId)
                } />;
        });
        return (
            <div >
                <section className="Galleries py-5 container">
                    {items}
                </section>
                <section>
                    <FullItem id={this.state.selectedItemId} />
                </section>
                {/* <section>
                    <NewItem />
                </section> */}
            </div>
        );
    }

    // componentWillUnmount()
    // {
    //     this.source.cancel()
    // }
}

export default Gallery;