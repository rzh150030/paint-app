import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers();

export default function configureStore(preloadedState) {
    return createStore(reducer, preloadedState, enhancer);
}
