import React from 'react';
import '../asserts/scss/global.scss';
import {ConnectedRouter} from 'connected-next-router';
import {Provider} from "react-redux";
import {store} from "@store/index";

function MyApp({Component, pageProps}: any) {

    return (
        <React.StrictMode>
            <Provider store={store}>
                {/*<ConnectedRouter>*/}
                    <Component {...pageProps} />
                {/*</ConnectedRouter>*/}
            </Provider>
        </React.StrictMode>
    );
}

export default MyApp;
