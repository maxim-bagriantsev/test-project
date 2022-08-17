import React from 'react';
import { ConnectedRouter } from 'connected-next-router';
import '../asserts/scss/global.scss';
import {Provider} from "react-redux";
import store from "react-redux";



function MyApp({ Component, pageProps }: any) {

    return (
    <React.StrictMode>
        <Provider store={store}>
            <ConnectedRouter>
                <Component {...pageProps} />
            </ConnectedRouter>
        </Provider>

    </React.StrictMode>
  );
}


export default MyApp;
