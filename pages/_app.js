import store from '@/store'
import '@/styles/globals.scss'
import { Provider } from 'react-redux'
import {persistStore} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'

let persistor = persistStore(store)

export default function App({ Component, pageProps: { session, ...pageProps} }) {
  return (
    <>
      <Head>
        <title>Shoppay</title>
        <meta name='description' content='Shoppay shopping website service' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
       <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
      </SessionProvider>
    </>
    
  )
    
  
}
