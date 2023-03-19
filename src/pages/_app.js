import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-modern-drawer/dist/index.css'
import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useBoundStore from '@/store';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

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
            <div className={myTheme} >
                  <QueryClientProvider client={queryClient} >
                        <Component {...pageProps} />
                        <ToastContainer />
                  </QueryClientProvider>
            </div>
      )
}
