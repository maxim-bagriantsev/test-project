import React from 'react';
import wrapper from '@store';
import '../asserts/scss/global.scss';


function MyApp({ Component, pageProps }: any) {

    return (
    <React.StrictMode>
                <Component {...pageProps} />
    </React.StrictMode>
  );
}


export default wrapper.withRedux(MyApp);
