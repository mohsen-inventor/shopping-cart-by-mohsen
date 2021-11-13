import { Product } from '../../types';

import {
    CartActionType,
    GetProductsAction,
    AddToCartAction,
    RemoveFromCartAction,
    UpdateQuantityAction,
    UpdateCartCountAction,
    UpdateCartTotalPriceAction,
    DisplayProductAction,
} from './cartType';

const getProducts = (): GetProductsAction => {
    return {
        type: CartActionType.GetProducts,
    };
};

const addToCart = (productID: number): AddToCartAction => {
    return {
        type: CartActionType.AddToCart,
        payload: {
            productID: productID,
        },
    };
};

const removeFromCart = (productID: number): RemoveFromCartAction => {
    return {
        type: CartActionType.RemoveFromCart,
        payload: {
            productID: productID,
        },
    };
};

const updateQuantity = (
    productID: number,
    quantity: number
): UpdateQuantityAction => {
    return {
        type: CartActionType.UpdateQuantity,
        payload: {
            productID: productID,
            quantity: quantity,
        },
    };
};

const UpdateCartCount = (count: number): UpdateCartCountAction => {
    return {
        type: CartActionType.UpdateCartCount,
        payload: {
            count: count,
        },
    };
};

const UpdateCartTotalPrice = (
    totalPrice: number
): UpdateCartTotalPriceAction => {
    return {
        type: CartActionType.UpdateCartTotalPrice,
        payload: {
            totalPrice: totalPrice,
        },
    };
};

const displayProduct = (productDetails: Product): DisplayProductAction => {
    return {
        type: CartActionType.DisplayProduct,
        payload: {
            product: productDetails,
        },
    };
};

export {
    getProducts,
    addToCart,
    removeFromCart,
    updateQuantity,
    UpdateCartCount,
    UpdateCartTotalPrice,
    displayProduct,
};
