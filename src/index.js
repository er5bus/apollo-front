/**
 * index.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React from 'react'
import ReactDOM from 'react-dom'
import { AnimatePresence } from "framer-motion";
import { Provider } from 'react-redux'
import { BrowserRouter, Redirect, Switch } from 'react-router-dom'

// Import routes
import { routes , default as defaultRoute } from "./containers/rootRoute"

//import { Offline, Online } from './components/connectivity'

// persist
import { PersistGate } from 'redux-persist/integration/react'

// store
import { store, persistor } from './store/configureStore'

// loaders
import { RouteTransition, SplashScreen } from './components/controls'

// toast
import { Toaster } from 'react-hot-toast';

// error pages
import { NotFoundPage, ErrorBoundary } from './components/error-pages'

//import { ContentRoute } from './components/router'

// load translation
import './i18n'

// load main style
import './assets/sass/style.scss'


const MOUNT_NODE = document.getElementById('js-root')

const ELEM = (
  <>
    {/* Provide Redux store */}
    <Provider store={store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate persistor={persistor} loading={<SplashScreen />}>
        {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
        <React.Suspense fallback={<SplashScreen />}>
          <BrowserRouter>
            <ErrorBoundary>
              <AnimatePresence exitBeforeEnter initial={true}>
                <Switch>
                  { routes.map((route, idx) => (
                    <RouteTransition key={idx} { ...route } />
                  )) }
                  <Redirect from="/" to={ defaultRoute.path } />
                  <RouteTransition component={NotFoundPage} />
                </Switch>
              </AnimatePresence>
            </ErrorBoundary>
          </BrowserRouter>
        </React.Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </PersistGate>
    </Provider>
  </>
)

ReactDOM.render(ELEM, MOUNT_NODE)

if (process.env.NODE_ENV !== 'production' && module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept('./store/reducers', () => {
    //ReactDOM.render(ELEM, MOUNT_NODE)
    ReactDOM.unmountComponentAtNode(MOUNT_NODE).render(ELEM, MOUNT_NODE)
  })
}
