import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import App from './App'

import 'antd-mobile/dist/antd-mobile.less'
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
        
    </React.StrictMode>,document.getElementById('root')
)