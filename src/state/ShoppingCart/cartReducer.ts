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
        case CartActionType.AddToCart:
            // add to cart[]
            return {};
        case CartActionType.RemoveFromCart:
            // remove selected item from cart[]
            return {};
        case CartActionType.UpdateQuantity:
            // update the selected product quantity in the cart[]
            return {};
        case CartActionType.UpdateCartCount:
            // update the cart count (total items count)
            return {};
        case CartActionType.DisplayProduct:
            // set the selected product for product details page
            return {};
        default:
            return state;
    }
};

export default cartReducer;
