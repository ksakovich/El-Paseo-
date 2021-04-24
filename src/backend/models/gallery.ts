import { Item } from './item';
export let items: Item[] = [];
const solidShampoo = new Item(
    61, //itemId
    13, // categoryId
    "Solid Shampoo", //itemName
    "Contains approx. 40 gr. - Ortiga y Yacón: Para la caída del cabello - Revitaliza. - Romero y Lavanda: Para cabello Normal", //itemDescription
    390.00, //itemPrice
    'medium', //itemSize
    false, //isComposite
    'bar', //units
    29 //quantityInStock
);
const bodySoap = new Item(
    60, //itemId
    13, // categoryId
    "Body / Facial Soap", //itemName
    "Contains approx. 100gr. Types" +
    "- Oatmeal: Dry, delicate and Sensitive Skin (Nourishes and Softens)" +
    "- Chamomile: Dry, delicate and Sensitive Skin (Calms, Softens and Deflames)" +
    "- Calendula: Dry, delicate and Sensitive Skin (Calms, Softens and Deflames)" +
    "- Coconut: Normal Skin (Creamy)" +
    "- Neutral: Normal Skin" +
    "- Silvestrino x 75 gr .: Normal Skin (Refreshing with fresh herbs)", //itemDescription
    260.00, //itemPrice
    'medium', //itemSize
    false, //isComposite
    'bar', //units
    22 //quantityInStock
);
const handSoap = new Item(
    53, //itemId
    13, // categoryId
    "Hand soap 'Cooperativa Inti Raimi'", //itemName
    "Contains 1  Liters.", //itemDescription
    130.00, //itemPrice
    'medium', //itemSize
    false, //isComposite
    'liter', //units
    17 //quantityInStock
);

const alcoholGelInti = new Item(
    54, //itemId
    14, // categoryId
    "Gel Alcohol 'Cooperativa Inti Raim'", //itemName
    "Contains 1  Liters.", //itemDescription
    500.00, //itemPrice
    'medium', //itemSize
    false, //isComposite
    'liter', //units
    8 //quantityInStock
);
const bodySoap2 = new Item(
    58, //itemId
    13, // categoryId
    "Body Soaps 'Ambarula Aromas'", //itemName
    "Contains approx. 80 gr. Scents:" +
    "Chamomile (antiseptic, anti-inflammatory for acne), lavender (antibacterial moisturizer, " + "chocolate and mint (moisturizer), lemon grass (antiseptic, antibacterial for oily skin) and " + "tea tree (antifungal, antibacterial, tea tree for acne).", //itemDescription
    500.00, //itemPrice
    'medium', //itemSize
    false, //isComposite
    'bar', //units
    18 //quantityInStock
);

let eggs = new Item(
    11, //itemId
    7, // categoryId
    "Field Eggs", //itemName
    "Dozen of Eggs", //itemDescription
    170.00, //itemPrice
    'medium', //itemSize
    false, //isComposite
    'dozen', //units
    18 //quantityInStock
);
items.push(solidShampoo, bodySoap, bodySoap2, handSoap, alcoholGelInti, eggs);
//export default items;