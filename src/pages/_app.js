import '@/styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-modern-drawer/dist/index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useBoundStore from '@/store';
import { useEffect, useState } from 'react';
import NextNProgress from 'nextjs-progressbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';

const queryClient = new QueryClient({
      defaultOptions: {
            queries: {
                  refetchOnWindowFocus: false,
            },
      },
})

export default function App({ Component, pageProps }) {
      const theme = useBoundStore((state) => state.theme)
      const [myTheme, setMyTheme] = useState('');
      useEffect(() => {
            console.log(theme)
            setMyTheme(theme)
      }, [theme])

      return (
            <>
                  <Head>
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
                        {/* <link rel="stylesheet" href='../styles/globals.css' /> */}
                  </Head>
                  <div className={myTheme} style={{ minHeight: '100vh' }} >
                        <QueryClientProvider client={queryClient} >
                              <NextNProgress color="#51a4f6" />
                              <Component {...pageProps} />
                              <ToastContainer />
                        </QueryClientProvider>
                  </div>
            </>

      )
}
