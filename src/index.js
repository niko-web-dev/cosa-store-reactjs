import React from 'react';
import { render } from 'react-dom'
import App from 'components/app/App'

import reportWebVitals from 'reportWebVitals'

import StoreContext from './storeContext'
import dataDb from './db'


render(

        <StoreContext.Provider value={dataDb}>
            <App />
        </StoreContext.Provider >, document.getElementById('root'))


reportWebVitals()
