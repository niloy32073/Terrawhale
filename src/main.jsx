import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "preline/preline";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  <Provider store={store}>
         <QueryClientProvider client={queryClient}>
            <App />
      </QueryClientProvider>

      </Provider>
)
