import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reduer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);

const {dispatch, subscribe, getState} = store;

const update = () => {
          document.getElementById("counter").textContent = store.getState().value;
}

subscribe(update);

const {inc, dec, rnd} = bindActionCreators( actions, dispatch);

document.getElementById("inc").addEventListener("click", inc);

document.getElementById("dec").addEventListener("click", dec);

document.getElementById("rnd").addEventListener("click", () => {
          const payload = Math.floor(Math.random()*10);
          rnd(value);
});

ReactDOM.render(
          <React.StrictMode>
                    <>
                    
                    </>
          </React.StrictMode>,
          document.getElementById('root')
);