import '@/styles/globals.css'
import Sidebar from './components/header'
import ProtectedRoute from './components/ProtectedRoute'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProtectedRoute>
      <Sidebar>
        <Component {...pageProps} /> 
      </Sidebar>
    </ProtectedRoute>
  )
}
