import { Product } from '../../types';

// Cart state
export interface CartState {
    cartItems: CartItem[];
    cartCount: number;
    cartTotalPrice: number;
    products: Product[];
    productDetails: Product;
}

// Cart item (product)
export interface CartItem extends Product {
    quantity: number;
}

// Actions types
export enum CartActionType {
    GetProducts = 'getProducts',
    AddToCart = 'addToCart',
    RemoveFromCart = 'removeFromCart',
    UpdateQuantity = 'updateQuantity',
    UpdateCartCount = 'updateCartCount',
    UpdateCartTotalPrice = 'updateCartTotalPrice',
    DisplayProduct = 'displayProduct',
}

// Actions interfaces
export interface GetProductsAction {
    type: CartActionType.GetProducts;
}

export interface AddToCartAction {
    type: CartActionType.AddToCart;
    payload: {
        productID: number;
    };
}

export interface RemoveFromCartAction {
    type: CartActionType.RemoveFromCart;
    payload: {
        productID: number;
    };
}

export interface UpdateQuantityAction {
    type: CartActionType.UpdateQuantity;
    payload: {
        productID: number;
        quantity: number;
    };
}

export interface UpdateCartCountAction {
    type: CartActionType.UpdateCartCount;
    payload: {
        count: number;
    };
}

export interface UpdateCartTotalPriceAction {
    type: CartActionType.UpdateCartTotalPrice;
    payload: {
        totalPrice: number;
    };
}

export interface DisplayProductAction {
    type: CartActionType.DisplayProduct;
    payload: {
        product: Product;
    };
}

export type CartAction =
    | GetProductsAction
    | AddToCartAction
    | RemoveFromCartAction
    | UpdateQuantityAction
    | UpdateCartCountAction
    | UpdateCartTotalPriceAction
    | DisplayProductAction;
