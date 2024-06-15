import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import '../styles/global.css';
import Head from 'next/head';
import LoadingScreen from '../components/LoadingScreen';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(true);

  const onClickAnywhere = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show the loading screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          maximum-scale="1"
        />
      </Head>

      <div
        className="text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base"
        onClick={onClickAnywhere}
      >
        <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
          <Component {...pageProps} inputRef={inputRef} />
        </main>
      </div>
    </>
  );
};

export default App;