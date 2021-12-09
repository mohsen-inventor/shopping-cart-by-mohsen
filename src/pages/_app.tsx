import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

// Global CSS
import '../_sass/global.scss';
// Redux store
import { store, persistor } from '../state/store';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
    </PersistGate>

  </Provider>
);

export default App;
