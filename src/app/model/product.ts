export class Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    quantity: number;
    category: string;
    unit: string;
    photoPath: string;

    constructor(id=0, name = '', brand='', price=0, quantity = 0, category = '',unit = '', photoPath=''){
        this.id = id;
        this.name = name;
        this.brand=brand;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
        this.unit = unit;
        this.photoPath = photoPath;
    }


}
