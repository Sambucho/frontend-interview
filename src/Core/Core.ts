import { createStore, Middleware, Reducer, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

class Core {
  public createStore = (reducer: Reducer, middleware: Middleware): Store => {
    return createStore(reducer, composeWithDevTools(applyMiddleware(thunk, middleware)));
  };
}

export default Core;
