import React from 'react';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootEpic from './containers/epics';
import reducers from './containers/reducers';
import Main from './containers/Main';

const epicMiddleware = createEpicMiddleware(rootEpic);

const initialState = {};
const middlewares = [
  createLogger(),
  epicMiddleware
];
const store = createStore(reducers, initialState, compose(applyMiddleware(...middlewares)));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
