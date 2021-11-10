import type { AppProps } from 'next/app';

import '../_sass/global.scss';

const QogitaApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
);

export default QogitaApp;
