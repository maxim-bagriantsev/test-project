import React from 'react';
import '../asserts/scss/global.scss';
import {Provider} from 'react-redux';
import {store} from '@store/index';

function MyApp({Component, pageProps}: any) {

    return (
        <React.StrictMode>
            <Provider store={store}>
                    <Component {...pageProps} />
            </Provider>
        </React.StrictMode>
    );
}

export default MyApp;
