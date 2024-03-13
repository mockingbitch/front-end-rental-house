import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/style.scss'

//Router-dom
import { BrowserRouter } from 'react-router-dom'

//Redux toolkit
import {store} from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

//I18n
import i18n from './translations/i18n'
import { I18nextProvider } from 'react-i18next'

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
            <I18nextProvider i18n={ i18n }>
                <BrowserRouter>
                    <App />
                </BrowserRouter>,
            </I18nextProvider>
        </PersistGate>
    </Provider>
)
