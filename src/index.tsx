import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { rootReducer } from './reducers'
import PostIndex from './components/post_index';
import PostNew from './components/post_new';

import "./styles/style.scss";


const store = createStore(rootReducer, applyMiddleware(promise))

const ROOT = document.querySelector(".container");

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/posts/new" component={PostNew} />
                    <Route path="/" component={PostIndex} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
        , ROOT)