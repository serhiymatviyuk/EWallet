import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import constructStore from './store/storeConfig';
import { Provider } from 'react-redux';
import { authenticationActions } from './reducers';
import { push } from 'react-router-redux';
import { Store } from 'redux';
import * as routes from "./constants/routes.constants";
import { TokenParser } from './utils/token.utils';
import { getCookie } from './utils/cookie.utils';
import RouterRoot from './components/Routings/RouterRoot';
import storeProvider from './helpers/store.provider';

export function AppInit(store: Store<any>) {
  const token: string = getCookie('token');

  if (token) {
    const parsedToken = TokenParser.parseJwt(token);

    if (document.URL.indexOf(routes.APP_URI) === -1) {
      store.dispatch(push(routes.APP_URI));
    }

    store.dispatch(
      authenticationActions.requestTokenSuccess({
        fetching: false,
        isAuthorized: true,
        firstName: parsedToken['first_name'],
        lastName: parsedToken['last_name'],
        email: parsedToken['email'],
        role: parsedToken['user_role'],
        token: token,
        expires: parsedToken.exp * 1000
      })
    )
  } else {
    if (document.URL.indexOf(routes.APP_URI) !== -1) {
      store.dispatch(authenticationActions.logoutSuccess)
    }
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const history = createBrowserHistory();
const initialState = (window as any).initialRedusState;
const store = constructStore(history, initialState);

storeProvider.init(store);

root.render(
  <Provider store={store}>
    <Router history={history}>
      <RouterRoot path='/' onEnter={AppInit(store)} />
    </Router>
  </Provider>
);

reportWebVitals();