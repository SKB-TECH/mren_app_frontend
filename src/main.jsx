import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './app/store'
import App from './App'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import StateContextProvider from './Context/contextApi'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <StateContextProvider>
      <App />
      </StateContextProvider>
      <ToastContainer />
    </Provider>
  </React.StrictMode>
)
