import { AppProps } from 'next/app';
import { GridProvider } from '@faceless-ui/css-grid';
import { ModalContainer, ModalProvider } from '@faceless-ui/modal';
import React from 'react';
import { Header } from '../components/Header';
import { MainMenu } from '../payload-types';
import '../css/app.scss';

const PayloadApp = (appProps: AppProps<{ mainMenu: MainMenu }>): React.ReactElement => {
  const {
    Component,
    pageProps,
  } = appProps;

  return (
    <React.Fragment>
      <GridProvider
        breakpoints={{
          s: 768,
          m: 1024,
          l: 1440,
        }}
        colGap={{
          s: '24px',
          m: '48px',
          l: '48px',
          xl: '72px',
        }}
        cols={{
          s: 4,
          m: 4,
          l: 12,
          xl: 12,
        }}
      >
        <ModalProvider transTime={0} zIndex="var(--modal-z-index)">
          <Header mainMenu={pageProps.mainMenu} />
          <Component {...pageProps} />

          <ModalContainer />
        </ModalProvider>
      </GridProvider>
    </React.Fragment>
  )
}

export default PayloadApp
