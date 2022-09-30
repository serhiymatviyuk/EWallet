import { applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import { epics } from '../services/root.epics';
import { reducers } from "../reducers/root.reducer";
import { configureStore } from "@reduxjs/toolkit";

function constructStore(history, preloadedState) {
    const routerPart = routerMiddleware(history);
    const epicMiddleware = createEpicMiddleware();

    const middleware = [thunkMiddleware, routerPart, epicMiddleware];

    // eslint-disable-next-line no-unused-vars
    const storeEnhancers = [applyMiddleware(...middleware)];
    // const composedEnhancers = composeWithDevTools(...storeEnhancers);

    const store = configureStore({
        reducer: reducers,
        middleware: middleware,
        devTools: process.env.NODE_ENV !== 'production',
    });

    if (module.hot) {
        // eslint-disable-next-line no-unused-expressions
        ('../reducers/root.reducer', () => {
            const nextRootEpic = require('../services/root.epics').epics;
            const nextRootReducer = require('../reducers/root.reducer').reducers;

            epicMiddleware.replaceEpic(nextRootEpic);
            store.replaceReducer(nextRootReducer);
        })
    }
    epicMiddleware.run(epics);

    return store;
}

export default constructStore;