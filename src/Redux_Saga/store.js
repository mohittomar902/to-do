import {createStore, applyMiddleware} from "redux"
import createSagaMiddleWare from "redux-saga"
import logger from "redux-logger"
import rootReducer from "./rootReducer"
import {tasks} from "./appSagas"

const saagaMiddleware = createSagaMiddleWare();

const middlewares = [logger,saagaMiddleware];

const store = createStore(rootReducer,applyMiddleware(...middlewares));
saagaMiddleware.run(tasks);
export default store;