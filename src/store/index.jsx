
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from '../reducer/index';
import thunk from "redux-thunk"; //Middleware 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
  );
  
  export default store;