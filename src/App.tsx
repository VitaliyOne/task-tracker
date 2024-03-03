import React from 'react';
import { Provider } from 'react-redux';
import TaskTracker from './components/TaskTracker';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <TaskTracker />
    </Provider>
  );
};

export default App;
