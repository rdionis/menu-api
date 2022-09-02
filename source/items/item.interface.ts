// source/items/item.interface.ts

export interface BaseItem {
    name: string, //  Unique identifier for the item record
    price: number, // Name of the item
    description: string, // Description of the item
    image: string, // URL pointing to the item's image
}
export interface Item extends BaseItem {
    id: number
}
