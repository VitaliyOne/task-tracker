import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import TaskTracker from './components/TaskTracker';
import { store, storePersistor } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={storePersistor}>
        <TaskTracker />
      </PersistGate>
    </Provider>
  );
};

export default App;
