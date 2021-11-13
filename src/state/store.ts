import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './ShoppingCart/cartReducer';

const rootReducer = combineReducers({
    shoppingCart: cartReducer,
});

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

// Run saga
// sagaMiddleWare.run(rootSaga);

// export type AppState = ReturnType<typeof rootReducer>;

export default store;
