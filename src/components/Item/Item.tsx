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
    <button className="Item" onClick={() => { console.log('onClick'); props.clicked(props.id); return true }}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </button>
);

export default item;