import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Search from './screens/search.jsx';
import { ModalProvider } from './components/modal';
import { useModal } from './contexts/Modal';

// Create a client
const queryClient = new QueryClient()

const Button = () => {
  const { openModal} = useModal()
  return (
    <button onClick={() => openModal()}>hello</button>
  )
}
function initSearchLib(rootElement = document.getElementById('searchLib')) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <ModalProvider>
            <Button/>
            <Search />
          </ModalProvider>
      </QueryClientProvider>
    </React.StrictMode>,
  )
}

// if in development mode, render immediately
  initSearchLib()

window.initSearchLib = initSearchLib;

