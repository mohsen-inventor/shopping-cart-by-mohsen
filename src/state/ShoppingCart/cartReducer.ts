import { CartActionType, CartAction, CartState } from './cartType';
import { Product } from '../../types';

const initialState: CartState = {
    cartItems: [],
    cartCount: 0,
    cartTotalPrice: 0,
    products: [], // all products
    productDetails: null, // single product for details page
};

const cartReducer = (state: CartState = initialState, action: CartAction) => {
    switch (action.type) {
        case CartActionType.GetProductsStart:
            return { ...state };
        case CartActionType.GetProductsSuccess:
            return {
                ...state,
                products: action.payload.products,
            };
        case CartActionType.GetProductsFail:
            return { ...state };
        case CartActionType.AddToCart:
            return { ...state };
        case CartActionType.RemoveFromCart:
            return { ...state };
        case CartActionType.UpdateQuantity:
            // update cart item quantity
            return { ...state };
        case CartActionType.UpdateCartCount:
            // update cart total items count
            return { ...state };
        case CartActionType.DisplayProduct:
            // select a single product to display in product details page
            return { ...state };
        default:
            return state;
    }
};

export default cartReducer;
