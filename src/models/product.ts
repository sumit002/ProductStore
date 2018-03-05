export interface ProductItem {
    uid: string;
    $key?: string;
    documentId?: string;
    serial: string;
    name: string;
    price: number;
    isFavorite: boolean;
    type: string;
    tag: string;
    inStock: boolean;
    description: string;
    createdOn: string;
    updatedOn: string;
    isActive: boolean;
    categories: string,
    profilePic: string,
    imageURL: string,
    rating: number
}