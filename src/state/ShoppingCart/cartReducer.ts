import { CartActionType, CartAction, CartState, CartItem } from './cartType';
import { Product } from '../../types';

const initialState: CartState = {
    cart: [],
    cartCount: 0,
    cartTotalPrice: 0,
    products: [], // all products
    productDetails: null, // single product for details page
};

const cartReducer = (state: CartState = initialState, action: CartAction) => {
    switch (action.type) {
        case CartActionType.GetProductsStart:
            return state;
        case CartActionType.GetProductsSuccess:
            return {
                ...state,
                products: action.payload.products,
            };
        case CartActionType.GetProductsFail:
            return { ...state };
        case CartActionType.AddToCart:
            // Add new items to the cart OR update the quantity of existing ones
            const itemInCart = state.cart.find((item) => {
                return item.gtin === action.payload.product.gtin;
            });

            const updatedCart = itemInCart
                ? // Update the quantity of existing item
                  state.cart.map((item) => {
                      if (item.gtin === action.payload.product.gtin) {
                          return { ...item, quantity: item.quantity + 1 };
                      } else {
                          return item;
                      }
                  })
                : // Add new item to the cart
                  [...state.cart, { ...action.payload.product, quantity: 1 }];

            return {
                ...state,
                cart: updatedCart,
            };
        case CartActionType.RemoveFromCart:
            return {
                ...state,
                cart: state.cart.filter((cartItem) => {
                    cartItem.gtin !== action.payload.productID;
                }),
            };
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
