import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
// Global CSS
import '../_sass/global.scss';
// Redux store
import store from '../state/store';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
