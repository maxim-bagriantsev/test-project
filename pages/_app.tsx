import React from 'react';
import {wrapper} from '@store';
import '../asserts/scss/global.scss';
import { ConnectedRouter } from 'connected-next-router';

function MyApp({ Component, pageProps }: any) {

  return (
    <React.StrictMode>
      <ConnectedRouter>
        <Component {...pageProps} />
      </ConnectedRouter>
    </React.StrictMode>
  );
}


export default wrapper.withRedux(MyApp);
