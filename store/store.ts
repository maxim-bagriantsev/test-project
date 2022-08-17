import {createStore, combineReducers} from 'redux';

import {createWrapper} from 'next-redux-wrapper';

import {
    wrapMakeStore,
} from 'next-redux-cookie-wrapper';




const rootReducer = combineReducers({

});

export const makeStore = (context: any = {}): any =>
    wrapMakeStore(() => {

        return createStore(
            rootReducer,
        );
    });

export type State = ReturnType<typeof rootReducer>
export type Store = ReturnType<typeof makeStore>

export default createWrapper<Store>(makeStore(), {debug: false});
