import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Layout } from '../components/layout/layout';
import { useEffect, useState } from 'react';
const lightTheme = createTheme({
   type: 'light',
   theme: {
      colors: {},
   },
});

const darkTheme = createTheme({
   type: 'dark',
   theme: {
      colors: {},
   },
});

function MyApp({ Component, pageProps }: AppProps) {
   const [auth, setAuth] = useState(true)
   useEffect(() => {
      let auth1 = localStorage.getItem('user');
      if (auth1) {
         setAuth(true);
      }
   })
   return (
      <NextThemesProvider
         defaultTheme="system"
         attribute="class"
         value={{
            light: lightTheme.className,
            dark: darkTheme.className,
         }}
      >
         <NextUIProvider>
            {auth ?
               <Layout>
                  <Component {...pageProps} />
               </Layout>
               : <Component {...pageProps} />}
         </NextUIProvider>
      </NextThemesProvider>
   );
}

export default MyApp;
