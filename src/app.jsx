import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Loader, useTemplateVal, useScreenInfo } from '@dsplay/react-template-utils';
import Intro from './components/intro/intro';
import Main from './components/main/main';
import i18n from './i18n';
import './app.sass';

// console.log(U, Loader)

const MIN_LOADING_DURATION = 2000;

// fonts to preload
// @font-face's must be defined in fonts.sass or another in-use style file
const fonts = [
  'Roboto Thin',
  'Roboto Light',
  'Roboto Regular',
  'Roboto Medium',
  'Roboto Bold',
  'Roboto Condensed',
  'Oswald',
];

function App() {
  const bg = useTemplateVal('background');

  // images to preload
  const images = [bg];

  // other tasks (Promises) to run during template intro

  const { screenFormat } = useScreenInfo();

  return (
    <I18nextProvider i18n={i18n}>
      <Loader
        placeholder={<Intro />}
        fonts={fonts}
        images={images}
        minDuration={MIN_LOADING_DURATION}
      >
        <div className={`app fade-in ${screenFormat}`}>
          <Main />
        </div>
      </Loader>
    </I18nextProvider>
  );
}

export default App;
