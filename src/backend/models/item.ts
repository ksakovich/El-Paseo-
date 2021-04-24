export class Item
{
    constructor(
        public itemId: number,
        public categoryId: number,
        public itemName: string,
        public itemDescription: string,
        public itemPrice: number,
        public itemSize: string,
        public isComposite: boolean,
        public itemUnits: string,
        public quantityInStock: number) { }
}